import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      id: 1,
      name,
      email,
    },
    { status: 201 },
  );
}
