import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
export async function GET(request: Request) {
  const { userId } = auth();
  return NextResponse.json({ hello: "world", userId });
}
