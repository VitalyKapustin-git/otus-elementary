import { showButton , hideButton , checkInput  } from './functions.js';

export default function render() {
	const rootElement = document.querySelector('.root');
	const textAreaBlockElement = document.createElement("div");
	textAreaBlockElement.id = 'textAreaBlockElement';
	rootElement.append(textAreaBlockElement);

	for(let i = 0; i < 3; i++) {
		let p = document.createElement("p");
		textAreaBlockElement.append(p);
		p.innerText = `${i}: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae numquam saepe totam explicabo in debitis magnam consectetur! Totam alias maiores natus impedit recusandae deleniti nisi porro eveniet commodi fuga.`
	}

	let inputElement = document.createElement("input");
	inputElement.id = "inputElement";
	rootElement.append(inputElement);

	let buttonElement = document.createElement("button");
	buttonElement.innerText = "Add paragraph";
	buttonElement.hidden = true;
	buttonElement.id = "buttonElement";
	rootElement.append(buttonElement);

	inputElement.addEventListener('input', () => {
		checkInput(inputElement, buttonElement);
	});

	buttonElement.addEventListener('click', () => {

		{textAreaBlockElement.childElementCount === 5 && textAreaBlockElement.removeChild(textAreaBlockElement.childNodes[0])};

		let p = document.createElement("p");
		p.innerText = inputElement.value;
		textAreaBlockElement.append(p);
		inputElement.value = '';
		hideButton(buttonElement);
	});
}
render()
