"use client";

import { useState } from "react";

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginFormProps = {
  login?: (credentials: LoginCredentials) => Promise<unknown>;
};

export default function LoginForm({ login = async () => {} }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      await login({
        email,
        password,
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Login failed");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Login</h1>

      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {error && <p role="alert">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}
