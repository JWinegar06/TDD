import { describe, expect, test } from "vitest";
import { calculateCartTotal } from "../src/shopping.js";

describe("calculateCartTotal", () => {
  test("returns zero for an empty cart", () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  test("calculates the total of one item", () => {
    const cart = [{ name: "Notebook", price: 5, quantity: 2 }];
    expect(calculateCartTotal(cart)).toBe(10);
  });

  test("calculates the total of multiple items", () => {
    const cart = [
      { name: "Notebook", price: 5, quantity: 2 },
      { name: "Pen", price: 1.5, quantity: 4 },
    ];
    expect(calculateCartTotal(cart)).toBe(16);
  });

  test("handles an item with a quantity of zero", () => {
    const cart = [{ name: "Notebook", price: 5, quantity: 0 }];
    expect(calculateCartTotal(cart)).toBe(0);
  });
  
  test("does not change the original cart", () => {
    const cart = [{ name: "Notebook", price: 5, quantity: 2 }];
    const originalCart = structuredClone(cart);
    calculateCartTotal(cart);
    expect(cart).toEqual(originalCart);
  });
});
