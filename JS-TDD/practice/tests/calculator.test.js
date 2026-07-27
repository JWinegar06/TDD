import { describe, expect, test } from "vitest"; 
import { add } from "../src/calculator.js";

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two decimal numbers", () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});
