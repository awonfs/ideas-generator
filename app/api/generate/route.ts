import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Prompt = {
  prompt: string;
};

export async function POST(request: Request) {
  const { userId } = auth();
  const data: Prompt = await request.json();
  if (!userId) {
    NextResponse.json({ error: "Not signed in" }, { status: 401 });
    return NextResponse.redirect("/sign-in");
  }
  const { prompt } = data;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 100,
  });
  const { text } = completion.data.choices[0];
  return NextResponse.json({ text });
}
