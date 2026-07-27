import { describe, expect, test } from "vitest";
import { formatUsername } from "../src/username.js";

describe("formatUsername", () => {
  test("converts a username to lowercase", () => {
    expect(formatUsername("Nyx")).toBe("nyx");
  });

  test("removes spaces from the beginning and end", () => {
    expect(formatUsername(" Nyx ")).toBe("nyx");
  });

  test("replaces spaces between words with underscores", () => {
    expect(formatUsername("Nyx Telamon")).toBe("nyx_telamon");
  });

  test("replaces multiple spaces with one underscore", () => {
    expect(formatUsername("Nyx Telamon")).toBe("nyx_telamon");
  });

  test("throws an error when the value is null", () => {
    expect(() => formatUsername(null)).toThrow("Username must be a string");
  });

  test("throws a TypeError for non-string values", () => {
    expect(() => formatUsername(42)).toThrow(TypeError);
  });
});
