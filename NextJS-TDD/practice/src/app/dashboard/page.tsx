"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <main>
        <h1>Not Logged In</h1>

        <p>You must login to view the dashboard.</p>

        <Link href="/login">Go to Login</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Dashboard</h1>

      <p>Welcome, {user.name}</p>

      <p>{user.email}</p>

      <button onClick={logout}>Logout</button>
    </main>
  );
}
