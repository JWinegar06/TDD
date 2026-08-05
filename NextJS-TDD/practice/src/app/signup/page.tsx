"use client";

import { useRouter } from "next/navigation";

import SignupForm from "@/components/SignupForm";
import { signupUser } from "@/services/authService";

export default function SignupPage() {
  const router = useRouter();

  async function signup(data: {
    name: string;
    email: string;
    password: string;
  }) {
    await signupUser(data);

    router.push("/login");
  }

  return (
    <main>
      <SignupForm signup={signup} />
    </main>
  );
}
