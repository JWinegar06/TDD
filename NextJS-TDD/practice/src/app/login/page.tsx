"use client";

import { useRouter } from "next/navigation";

import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();

  async function login(credentials: { email: string; password: string }) {
    const result = await loginUser(credentials);

    auth.login(result.user);

    router.push("/dashboard");
  }

  return (
    <main>
      <LoginForm login={login} />
    </main>
  );
}
