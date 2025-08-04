


import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_PUBLIC_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

async function run(promptText) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  const result = await model.generateContent(promptText);
  const response = await result.response;
  const text = await response.text();

  // ✅ Limit output to 50 words
  const words = text.split(/\s+/).slice(0, 50).join(" ");
  return words + (text.split(/\s+/).length > 50 ? "..." : "");
}

export default run;
