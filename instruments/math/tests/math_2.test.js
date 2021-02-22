import circleS from "../src/math_2";

test("if return correct square for cirle", () => {
  expect(circleS(4)).toBe(50);
  expect(circleS(21)).toBe(1385);
});
