import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';

export const maxDuration = 30;

const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];

    // Detect format: if first message has 'content' as string → old format, use directly
    // If first message has 'parts' array → new UIMessage format, convert it
    let modelMessages: any[];
    const firstMsg = messages[0];
    const isOldFormat = firstMsg && typeof firstMsg.content === 'string';

    if (isOldFormat) {
      // Old plain-text format: { role, content }
      modelMessages = messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      }));
    } else {
      // New UIMessage format from @ai-sdk/react v3 — convert to model messages
      modelMessages = await convertToModelMessages(messages);
    }

    const result = streamText({
      model: googleProvider('gemini-2.5-flash'),
      system: `You are the official customer service representative for Yudru Drone Solutions. 
      Be helpful, friendly, and concise. Answer questions about drones, repair services, training programs, and pricing.
      
      IMPORTANT: If the user expresses a desire to connect, contact, or get in touch with the company, you MUST provide the following contact information:
      - 📧 Email: info@yudru.com
      - 📞 Phone: +91 9810653919
      - 📍 Location: Ganesh Nagar, New Delhi, 110092`,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
