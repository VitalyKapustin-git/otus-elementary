import checkRegex from "../src/regex";

test("if return correct type of entered string (email or phone or date", () => {
  jest.spyOn(window, "prompt").mockReturnValue("+71234567890");
  expect(checkRegex()).toBe("phone");
  jest.spyOn(window, "prompt").mockReturnValue("test.1@ecak.com");
  expect(checkRegex()).toBe("email");
  jest.spyOn(window, "prompt").mockReturnValue("02/02/21");
  expect(checkRegex()).toBe("date");
  jest.spyOn(window, "prompt").mockReturnValue("test.1@ecak.comcom");
  expect(checkRegex()).toBe("Invalid input. Try again.");
});
