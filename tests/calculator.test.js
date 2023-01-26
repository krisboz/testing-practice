import calculator from "../functions/calculator.js";
/**
describe("Calculator test", () => {
  test("sum", () => {
    expect(calculator.sum(2, 2).toBe(4));
  });
  test("subtract", () => {
    expect(calculator.subtract(2, 2).toBe(0));
  });

  test("divide", () => {
    expect(calculator.divide(6 / 2).toBe(3));
  });

  test("multiply", () => {
    expect(calculator.multiply(3, 7).toBe(21));
  });
});
 */

test("calculator addition", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("calculator subtraction", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("calculator division", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("calculator multiplication", () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});
