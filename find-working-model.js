const { google } = require('@ai-sdk/google');
const { generateText } = require('ai');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const match = env.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
if (match) process.env.GOOGLE_GENERATIVE_AI_API_KEY = match[1].trim();

async function test() {
  const models = ['gemini-1.5-flash', 'gemini-1.5-flash-latest', 'gemini-2.0-flash-exp', 'gemini-pro'];
  
  for (const m of models) {
    console.log(`--- Testing model: ${m} ---`);
    try {
      const { text } = await generateText({
        model: google(m),
        prompt: 'Hi'
      });
      console.log(`SUCCESS [${m}]: ${text}`);
      return;
    } catch (e) {
      console.log(`ERROR [${m}]: ${e.message}`);
      if (e.responseBody) {
        console.log(`RESPONSE BODY: ${e.responseBody}`);
      }
      if (e.data) {
        console.log(`DATA: ${JSON.stringify(e.data, null, 2)}`);
      }
    }
  }
}

test();
