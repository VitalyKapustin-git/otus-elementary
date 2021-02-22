export function showButton(buttonElement) {
  const button = buttonElement;
  button.hidden = false;
}

export function hideButton(buttonElement) {
  const button = buttonElement;
  button.hidden = true;
}

export function checkInput(input, buttonElement) {
  const button = buttonElement;
  // eslint-disable-next-line no-unused-expressions
  input.value.length !== 0 ? showButton(button) : hideButton(button);
}
