import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "../src/components/LoginForm";

describe("LoginForm", () => {
  test("renders email and password fields", () => {
    render(<LoginForm />);

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("shows an error when email is empty", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  test("calls login with entered credentials", async () => {
    const user = userEvent.setup();

    const login = vi.fn().mockResolvedValue({
      token: "abc123",
    });

    render(<LoginForm login={login} />);

    await user.type(screen.getByLabelText(/email/i), "alice@example.com");

    await user.type(screen.getByLabelText(/password/i), "password123");

    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(login).toHaveBeenCalledWith({
      email: "alice@example.com",
      password: "password123",
    });
  });

  test("displays login failure message", async () => {
    const user = userEvent.setup();

    const login = vi
      .fn()
      .mockRejectedValue(new Error("Invalid email or password"));

    render(<LoginForm login={login} />);

    await user.type(screen.getByLabelText(/email/i), "alice@example.com");

    await user.type(screen.getByLabelText(/password/i), "wrongpassword");

    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(
      await screen.findByText("Invalid email or password"),
    ).toBeInTheDocument();
  });
});
