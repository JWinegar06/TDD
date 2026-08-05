import { afterEach, describe, expect, test, vi } from "vitest";

import { loginUser, signupUser } from "../src/services/authService";

describe("authService", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("sends signup information to API", async () => {
    const mockUser = {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
    };

    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => mockUser,
    } as Response);

    const result = await signupUser({
      name: "Alice",
      email: "alice@example.com",
      password: "password123",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/signup",
      expect.objectContaining({
        method: "POST",
      }),
    );

    expect(result).toEqual(mockUser);
  });

  test("logs the user in", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,

      json: async () => ({
        token: "test-token",
      }),
    } as Response);

    const result = await loginUser({
      email: "alice@example.com",
      password: "password123",
    });

    expect(fetchMock).toHaveBeenCalled();

    expect(result).toEqual({
      token: "test-token",
    });
  });

  test("throws an error when login fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
    } as Response);

    await expect(
      loginUser({
        email: "alice@example.com",
        password: "wrongpassword",
      }),
    ).rejects.toThrow("Invalid email or password");
  });
});
