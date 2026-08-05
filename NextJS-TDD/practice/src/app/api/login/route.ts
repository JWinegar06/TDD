import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 },
    );
  }

  const username = email.split("@")[0];

  const name = username.charAt(0).toUpperCase() + username.slice(1);

  return NextResponse.json({
    token: "test-token",
    user: {
      name,
      email,
    },
  });
}
