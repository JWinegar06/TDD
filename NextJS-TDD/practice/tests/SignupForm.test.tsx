import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignupForm from "../src/components/SignupForm";

describe("SignupForm", () => {
  test("renders the signup form", () => {
    render(<SignupForm />);

    expect(
      screen.getByRole("heading", { name: /create account/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("shows errors when submitted empty", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.click(screen.getByRole("button", { name: /sign up/i }));

    expect(screen.getByText("Name is required")).toBeInTheDocument();

    expect(screen.getByText("Email is required")).toBeInTheDocument();

    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("shows an error for an invalid email", async () => {
    const user = userEvent.setup();

    render(<SignupForm />);

    await user.type(screen.getByLabelText(/name/i), "Alice");

    await user.type(screen.getByLabelText(/email/i), "not-an-email");

    await user.type(screen.getByLabelText(/password/i), "password123");

    await user.click(screen.getByRole("button", { name: /sign up/i }));

    expect(screen.getByText("Enter a valid email")).toBeInTheDocument();
  });

  test("calls signup when valid information is entered", async () => {
    const user = userEvent.setup();

    const signup = vi.fn().mockResolvedValue({
      id: 1,
      name: "Alice",
      email: "alice@example.com",
    });

    render(<SignupForm signup={signup} />);

    await user.type(screen.getByLabelText(/name/i), "Alice");

    await user.type(screen.getByLabelText(/email/i), "alice@example.com");

    await user.type(screen.getByLabelText(/password/i), "password123");

    await user.click(screen.getByRole("button", { name: /sign up/i }));

    expect(signup).toHaveBeenCalledWith({
      name: "Alice",
      email: "alice@example.com",
      password: "password123",
    });
  });
});
