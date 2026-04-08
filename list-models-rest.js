const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
const match = env.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
const apiKey = match ? match[1].trim() : "";

async function listModels() {
  const genAI = new GoogleGenerativeAI(apiKey);
  try {
    // Note: listModels is part of the admin/management API usually, 
    // but the REST API allows it. The JS SDK might not have it in a simple way.
    // However, we can try to hit the fetch endpoint directly.
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Models:", JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Error:", e.message);
  }
}

listModels();
