const { expect } = require("chai");
const { isValidPassword } = require("../src/password");

describe("Password Validator - Chai Test", function () {
  it("should accept a password with at least 8 characters", function () {
    const result = isValidPassword("testing1");

    expect(result).to.equal(true);
  });

  it("should reject a password shorter than 8 characters", function () {
    const result = isValidPassword("test");

    expect(result).to.equal(false);
  });

  it("should accept a password that is exactly 8 characters", function () {
    const result = isValidPassword("12345678");

    expect(result).to.be.true;
  });
});
