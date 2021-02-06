import { showButton, hideButton, checkInput } from './functions.js';

export default function createPage(root) {
  const rootElement = root;
  const textAreaBlockElement = document.createElement('div');
  textAreaBlockElement.className = 'textAreaBlockElement';
  rootElement.append(textAreaBlockElement);

  for (let i = 0; i < 3; i++) {
    const p = document.createElement('p');
    textAreaBlockElement.append(p);
    p.innerText = `${i}: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae numquam saepe totam explicabo in debitis magnam consectetur! Totam alias maiores natus impedit recusandae deleniti nisi porro eveniet commodi fuga.`;
  }

  const inputElement = document.createElement('input');
  inputElement.className = 'inputElement';
  rootElement.append(inputElement);

  const buttonElement = document.createElement('button');
  buttonElement.innerText = 'Add paragraph';
  buttonElement.hidden = true;
  buttonElement.className = 'buttonElement';
  rootElement.append(buttonElement);

  inputElement.addEventListener('input', () => {
    checkInput(inputElement, buttonElement);
  });

  buttonElement.addEventListener('click', () => {
    { textAreaBlockElement.childElementCount === 5 && textAreaBlockElement.removeChild(textAreaBlockElement.childNodes[0]); }

    const p = document.createElement('p');
    p.innerText = inputElement.value;
    textAreaBlockElement.append(p);
    inputElement.value = '';
    hideButton(buttonElement);
  });
}
