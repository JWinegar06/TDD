"use client";

import { useRouter } from "next/navigation";

import LoginForm from "@/components/LoginForm";
import { loginUser } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();

  async function login(credentials: { email: string; password: string }) {
    await loginUser(credentials);

    auth.login({
      name: "Student",
      email: credentials.email,
    });

    router.push("/dashboard");
  }

  return (
    <main>
      <LoginForm login={login} />
    </main>
  );
}
