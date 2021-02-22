export function showButton(button) {
  button.hidden = false;
}

export function hideButton(button) {
  button.hidden = true;
}

export function checkInput(input, button) {
  input.value.length !== 0 ? showButton(button) : hideButton(button);
}
