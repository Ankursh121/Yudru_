const fs = require('fs');

async function list() {
  const envLocal = fs.readFileSync('.env.local', 'utf8');
  const match = envLocal.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
  if (!match) return;
  const key = match[1].trim();

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
  const data = await res.json();
  if (data.models) {
    fs.writeFileSync('models.txt', data.models.map(m => m.name).join('\n'));
    console.log("WROTE MODELS TO models.txt");
  }
}
list();
