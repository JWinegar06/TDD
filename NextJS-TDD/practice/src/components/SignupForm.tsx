"use client";

import { useState } from "react";

import { ValidationErrors, validateSignup } from "@/utils/validation";

type SignupData = {
  name: string;
  email: string;
  password: string;
};

type SignupFormProps = {
  signup?: (data: SignupData) => Promise<unknown>;
};

export default function SignupForm({
  signup = async () => {},
}: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<ValidationErrors>({});

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const validationErrors = validateSignup(name, email, password);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    await signup({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Create Account</h1>

      <div>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        {errors.name && <p role="alert">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        {errors.email && <p role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {errors.password && <p role="alert">{errors.password}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
