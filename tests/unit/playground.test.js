import { evenOrOdd, multiply } from "@/playground.js";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
    expect(10 - 5).toBe(5);
  });

  describe("evenOrOdd", () => {
    describe("when number is even", () => {
      it("returns even for even numbers", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("when number is odd", () => {
      it("returns odd for odd numbers", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
