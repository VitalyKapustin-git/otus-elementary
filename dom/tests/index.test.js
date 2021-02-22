import createPage from "../src/createPage";

let el;

beforeEach(() => {
  el = document.createElement("div");
  createPage(el);
});

it("Check elements on page", () => {
  expect(el.querySelector(".buttonElement").hidden).toBe(true);
  expect(el.querySelector(".inputElement").hidden).toBe(false);
  expect(el.querySelector(".textAreaBlockElement")).toBeTruthy();
});

it("Check elements in .textAreaBlockElement", () => {
  expect(el.querySelector(".textAreaBlockElement").childElementCount).toBe(3);
});

it("Check if on button click add my value in .textAreaBlockElement", () => {
  el.querySelector(".inputElement").value = "testValue";
  el.querySelector(".buttonElement").click();
  expect(
    el.querySelector(".textAreaBlockElement").childNodes[3].innerText
  ).toBe("testValue");
});

it(`Check if delete paragraphs when more 
  then 5 element in .textAreaBlockElement`, () => {
  el.querySelector(".inputElement").value = "testValue";
  for (let i = 0; i < 3; i + 1) {
    el.querySelector(".buttonElement").click();
  }
  expect(
    el.querySelector(".textAreaBlockElement").childNodes[2].innerText
  ).toBe("testValue");
});
