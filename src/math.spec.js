import { sum, mul, sub, div } from "./math";

describe("Math module", () => {
  test("sum: Adding 1 + 1 equals 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("sum: when pass null throws error", () => {
    expect(() => {
      return sum(null, 1);
    }).toThrow(
      new Error('Please pass numbers')
    );
  });

  test("mul: Multiplying 1 * 1 equals 1", () => {
    expect(mul(1, 1)).toBe(1)
  });

  test("sub: Subtracting 1 - 1 equals 0", () => {
    expect(sub(1, 1)).toBe(0)
  });

  test("div: Dividing 1 / 1 equals 1", () => {
    expect(div(1, 1)).toBe(1)
  });
});