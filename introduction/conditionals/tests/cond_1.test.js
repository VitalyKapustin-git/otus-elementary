import printLarge from "../src/cond_1";

describe("Lets check if the larger number returns", () => {
  test("If return 6 then enter 6 and 0", () => {
    jest.spyOn(console, "log");
    printLarge(6, 0);
    expect(console.log).toHaveBeenCalledWith(6);
  });
  test('If return "Not a number" then enter nothing', () => {
    jest.spyOn(console, "log");
    printLarge();
    expect(console.log).toHaveBeenCalledWith("Not a number");
  });
  test('If return "Not a number" then enter {}}', () => {
    jest.spyOn(console, "log");
    printLarge({});
    expect(console.log).toHaveBeenCalledWith("Not a number");
  });
  test("If return -2 then enter -10 and -3", () => {
    jest.spyOn(console, "log");
    printLarge(-10, -3);
    expect(console.log).toHaveBeenCalledWith(-3);
  });
});
