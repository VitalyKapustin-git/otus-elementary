import printLarge from "../src/cond_1";

describe("Lets check if the larger number returns", () => {
  test("If return 6 then enter 6 and 0", () => {
    expect(printLarge(6, 0)).toBe(6);
  });
  test('If return "Not a number" then enter nothing', () => {
    expect(printLarge()).toBe("Not a number");
  });
  test('If return "Not a number" then enter {}}', () => {
    expect(printLarge({})).toBe("Not a number");
  });
  test("If return -2 then enter -10 and -3", () => {
    expect(printLarge(-10, -3)).toBe(-3);
  });
});
