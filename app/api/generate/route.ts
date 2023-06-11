import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

// TODO: Add prisma client here
const prisma = new PrismaClient();

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
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { prompt } = data;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 100,
  });

  const { text } = completion.data.choices[0];

  if (text) {
    await prisma.prompt.create({
      data: {
        prompt,
        userId,
        response: text,
      },
    });
    return NextResponse.json({ text });
  } else {
    return NextResponse.json(
      { error: "Whoopsie doopsie no response from openAI" },
      { status: 404 }
    );
  }
}
