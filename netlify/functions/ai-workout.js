import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async (req, res) => {
  try {
    const { prompt } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert fitness coach creating safe, long-term workout plans." },
        { role: "user", content: prompt }
      ],
      temperature: 0.8,
    });

    return res.json({ output: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    return res.json({ output: "Error generating plan." });
  }
};
