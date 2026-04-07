import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, inquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required fields.' }, { status: 400 });
    }

    // Configure Nodemailer transporter natively protecting credentials via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to gmail for simple setups
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your SMTP email address
        pass: process.env.SMTP_PASS, // Your SMTP password or App Password
      },
    });

    // Verify SMTP connection config
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP_USER or SMTP_PASS is missing in environment variables. Email will fail unless configured.");
    }

    // Secure HTML compilation structuring the payload perfectly for info@yudru.com
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'no-reply@yudru.com'}>`, // Send through authenticated user to avoid spam flags
      replyTo: email, // If the admin hits 'reply', it goes directly to the user!
      to: 'info@yudru.com', // Target admin inbox
      subject: `New Inquiry from ${name} - Yudru Drone Solutions`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Organization: ${organization || 'N/A'}
        Type of Inquiry: ${inquiryType || 'General'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #00e5ff; font-weight: bold; margin-bottom: 20px;">New Website Inquiry!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
          <p><strong>Inquiry Type:</strong> <span style="background-color: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${inquiryType || 'General'}</span></p>
          
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          
          <h3 style="margin-bottom: 10px;">Message:</h3>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Dispatch payload
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Email API route error:', error);
    return NextResponse.json({ error: 'Failed to send the message. Please ensure SMTP configuration is correct.' }, { status: 500 });
  }
}
