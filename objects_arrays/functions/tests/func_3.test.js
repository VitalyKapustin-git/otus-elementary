import pow from "../src/func_3";

test("if return num pow num", () => {
  expect(pow(2, 2)).toBe(4);
  expect(pow(3, 2)).toBe(9);
  expect(pow(2, 0)).toBe(1);
});
