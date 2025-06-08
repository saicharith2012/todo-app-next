import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log(data);
  await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      password: data.password,
    },
  });

  return NextResponse.json({
    message: "You are signed up.",
  });
}
