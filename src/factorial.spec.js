import { factorial } from './factorial';

describe('Factorial should', () => {
  test("return 1 if pass 1", () => {
    expect(factorial(1)).toEqual(1);
  });

  test("return 1 if pass 0", () => {
    expect(factorial(0)).toEqual(1);
  });

  test("return 120 if pass 5", () => {
    expect(factorial(5)).toEqual(120);
  });

  test("return false if pass null", () => {
    expect(factorial(null)).toEqual(false);
  });

  test("return false if pass negative number", () => {
    expect(factorial(-1)).toEqual(false);
    expect(factorial(-3)).toEqual(false);
  });

  test("return error if pass undefined", () => {
    expect(() => {
      return factorial();
    }).toThrow(
      new Error('Number should be defined')
    );
  });

  test("return error if pass 'string'", () => {
    expect(() => {
      return factorial('');
    }).toThrow(
      new Error('Argument should be a number')
    );
  });
});