import { describe, expect, test } from "vitest";
import {
  isValidEmail,
  isValidPassword,
  validateSignup,
} from "../src/utils/validation";

describe("isValidEmail", () => {
  test("returns true for a valid email", () => {
    expect(isValidEmail("student@example.com")).toBe(true);
  });

  test("returns false for an invalid email", () => {
    expect(isValidEmail("student")).toBe(false);
  });
});

describe("isValidPassword", () => {
  test("returns true when password has at least 8 characters", () => {
    expect(isValidPassword("password123")).toBe(true);
  });

  test("returns false when password is too short", () => {
    expect(isValidPassword("123")).toBe(false);
  });
});

describe("validateSignup", () => {
  test("returns errors when fields are empty", () => {
    const result = validateSignup("", "", "");

    expect(result.name).toBe("Name is required");
    expect(result.email).toBe("Email is required");
    expect(result.password).toBe("Password is required");
  });

  test("returns no errors for valid signup information", () => {
    const result = validateSignup("Alice", "alice@example.com", "password123");

    expect(result).toEqual({});
  });
});
