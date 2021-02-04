export default function sqrtFn() {
	let userInput = prompt('Введите а, b и c в формате a,b,c').split(',');
	let [a, b, c] = userInput;

	let d = Math.pow(b, 2) - 4 * a * c;

	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		return `${x1} ${x2}`;
	}
	if (d === 0) {
		return `${-b / (2 * a)}`;
	}
	return "Корней нет";
}