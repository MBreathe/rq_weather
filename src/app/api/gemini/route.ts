import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const { GEMINI_API_KEY } = process.env;
  if (!GEMINI_API_KEY) {
    return Response.json(
      { error: "GEMINI_API_KEY is not set" },
      { status: 500 },
    );
  }

  const ai = new GoogleGenAI({});
  const { prompt } = await req.json();
  if (!prompt) {
    return Response.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });
    console.log(response.usageMetadata);

    return Response.json(response.text);
  } catch (e) {
    return Response.json(
      { error: "Error generating response" },
      { status: 500 },
    );
  }
}
