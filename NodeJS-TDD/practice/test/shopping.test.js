const { expect } = require("chai");
const { calculateTotal } = require("../src/shopping");

describe("Shopping Cart - NYC Coverage Test", function () {
  it("should calculate the normal total for a non-member", function () {
    const result = calculateTotal(20, 3, false);

    expect(result).to.equal(60);
  });

  it("should apply a 10% discount for a member", function () {
    const result = calculateTotal(20, 3, true);

    expect(result).to.equal(54);
  });
});
