const { assert, expect } = require("chai");
const count = require("../luhnCheck");

describe("#check()", function() {

  it("should return true if given valid number input", () => {
    const output = count(79927398713);
    expect(output).to.be.true;

    const output2 = count(8532);
    expect(output2).to.be.true;
  });

  it("should return true if given valid string input", () => {
    const output = count("12345674");
    expect(output).to.be.true;
  });

  it("should return false if given invalid number input", () => {
    const output = count(1234567812345678);
    expect(output).to.be.false;

    const output2 = count(49927398717);
    expect(output2).to.be.false;
  });

  it("should return false if input is NaN", () => {
    const expectedThrow = "input is not a number";

    expect(() => count("hello")).to.throw(expectedThrow);
  });

  it("should throw error if given no input string", () => {
    const expectedThrow = "no number was provided";

    expect(() => count()).to.throw(expectedThrow);
  });

});