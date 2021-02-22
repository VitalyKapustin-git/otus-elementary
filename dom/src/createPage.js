import { hideButton, checkInput } from "./functions";

export default function createPage(root) {
  const rootElement = root;
  const textAreaBlockElement = document.createElement("div");
  textAreaBlockElement.className = "textAreaBlockElement";
  rootElement.append(textAreaBlockElement);

  for (let i = 0; i < 3; i += 1) {
    const p = document.createElement("p");
    textAreaBlockElement.append(p);
    p.innerText = `${i}: Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. Quidem molestiae 
    numquam saepe totam explicabo in debitis 
    magnam consectetur! Totam alias maiores natus 
    impedit recusandae deleniti nisi porro eveniet commodi fuga.`;
  }

  const inputElement = document.createElement("input");
  inputElement.className = "inputElement";
  rootElement.append(inputElement);

  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Add paragraph";
  buttonElement.hidden = true;
  buttonElement.className = "buttonElement";
  rootElement.append(buttonElement);

  inputElement.addEventListener("input", () => {
    checkInput(inputElement, buttonElement);
  });

  buttonElement.addEventListener("click", () => {
    // eslint-disable-next-line no-lone-blocks
    {
      // eslint-disable-next-line no-unused-expressions
      textAreaBlockElement.childElementCount === 5 &&
        textAreaBlockElement.removeChild(textAreaBlockElement.childNodes[0]);
    }

    const p = document.createElement("p");
    p.innerText = inputElement.value;
    textAreaBlockElement.append(p);
    inputElement.value = "";
    hideButton(buttonElement);
  });
}
