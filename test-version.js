const fs = require('fs');

async function test() {
  const { google } = await import('@ai-sdk/google');
  const { generateText } = await import('ai');

  const envLocal = fs.readFileSync('.env.local', 'utf8');
  const match = envLocal.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
  if (match) process.env.GOOGLE_GENERATIVE_AI_API_KEY = match[1].trim();

  try {
    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      prompt: 'Hello',
    });
    console.log("Success! Output:", text);
  } catch (err) {
    console.error("AI Error:", err.message);
  }
}
test();
