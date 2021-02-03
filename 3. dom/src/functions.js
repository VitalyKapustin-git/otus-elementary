function showButton (button) {
	button.hidden = false;
}

function hideButton (button) {
	button.hidden = true;
}

function checkInput(input, button) {
	input.value.length !== 0 ? showButton(button) : hideButton(button);
}

export { showButton, hideButton, checkInput };