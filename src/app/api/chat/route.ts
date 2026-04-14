import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, convertToModelMessages, type ModelMessage } from 'ai';
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/constants/contact';

export const maxDuration = 30;

const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error("CRITICAL: GOOGLE_GENERATIVE_AI_API_KEY is missing in environment variables.");
      return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });
    }

    console.log(`Processing chat request with ${messages.length} messages`);

    // Detect format: if first message has 'content' as string → old format, use directly
    // If first message has 'parts' array → new UIMessage format, convert it
    let modelMessages: ModelMessage[];
    const firstMsg = messages[0];
    const isOldFormat = firstMsg && typeof firstMsg.content === 'string';

    if (isOldFormat) {
      // Old plain-text format: { role, content }
      modelMessages = messages.map((m: { role: 'user' | 'assistant' | 'system'; content: string }) => ({
        role: m.role as 'user' | 'assistant' | 'system',
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
      
      IMPORTANT: If the user expresses a desire to connect, contact, or get in touch with the company, you MUST prioritize directing them to WhatsApp:
      - 💬 WhatsApp: ${WHATSAPP_URL} (Recommended for fastest response)
      - 📧 Email: ${CONTACT_EMAIL}
      - 📞 Phone: ${CONTACT_PHONE}
      - 📍 Location: ${CONTACT_ADDRESS}`,
      messages: modelMessages,
    });

    const response = result.toUIMessageStreamResponse();
    console.log("Stream response initiated");
    return response;
  } catch (error: unknown) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
