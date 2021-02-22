import getYoungest from "../src/date_3";

test("if returns the younger user correctly", () => {
  expect(getYoungest("02.02.1970", "02.02.2002")).toBe(
    "Second user is younger"
  );
  expect(getYoungest("12.08.2012", "25.08.1852")).toBe("First user is younger");
});
