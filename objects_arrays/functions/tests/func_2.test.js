import isWord from "../src/func_2";

test("If not just a one word", () => {
  expect(isWord("alloha")).toBe(false);
  expect(isWord("alloha alloha")).toBe(true);
});
