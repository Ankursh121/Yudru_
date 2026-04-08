const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const match = env.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
const apiKey = match ? match[1].trim() : "";

async function listModels() {
  const genAI = new GoogleGenerativeAI(apiKey);
  try {
    // There isn't a direct listModels in the client SDK like this usually, 
    // but we can try to initialize one and see if it fails early.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("hi");
    console.log("Response:", result.response.text());
  } catch (e) {
    console.error("Error:", e.message);
  }
}

listModels();
