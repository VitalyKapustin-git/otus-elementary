import checkCirleInSquare from "../src/cond_3";

describe("Lets check if the larger number returns", () => {
  test("If circle = 5 in square = 2", () => {
    expect(checkCirleInSquare(5, 2)).toBe("Круг не помещается в квадрат");
  });
  test("If circle = 2 in square = 5", () => {
    expect(checkCirleInSquare(2, 5)).toBe("Круг помещается в квадрат");
  });
  test('If return "Not a number" for {}', () => {
    expect(checkCirleInSquare({})).toBe("Not a number");
  });
});
