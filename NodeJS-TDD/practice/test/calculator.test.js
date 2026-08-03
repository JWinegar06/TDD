const assert = require("assert");
const { multiply } = require("../src/calculator");

describe("Calculator - Mocha Test", function () {
  it("should multiply two positive numbers", function () {
    const result = multiply(4, 5);

    assert.strictEqual(result, 20);
  });

  it("should return 0 when multiplying by zero", function () {
    const result = multiply(25, 0);

    assert.strictEqual(result, 0);
  });

  it("should correctly multiply negative numbers", function () {
    const result = multiply(-4, 5);

    assert.strictEqual(result, -20);
  });
});
