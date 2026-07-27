import { describe, expect, test } from "vitest";
import { isValidPassword } from "../src/password.js";

describe("isValidPassword", () => {
  test("accepts a password that meets every requirement", () => {
    expect(isValidPassword("Testing1")).toBe(true);
  });

  test("rejects a password shorter than eight characters", () => {
    expect(isValidPassword("Test1")).toBe(false);
  });

  test("rejects a password without an uppercase letter", () => {
    expect(isValidPassword("testing1")).toBe(false);
  });

  test("rejects a password without a number", () => {
    expect(isValidPassword("Testing")).toBe(false);
  });

  test("rejects non-string values", () => {
    expect(isValidPassword(null)).toBe(false);
    expect(isValidPassword(undefined)).toBe(false);
    expect(isValidPassword(12345678)).toBe(false);
  });
});
