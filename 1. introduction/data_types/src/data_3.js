export default function sumNumElements() {
	
	let number = prompt("Введите трехзначное число", 123);

	console.log("Entered value: " + number);

	if (isNaN(Number(number))) {
		console.log("Not a number");
		return "Not a number";
	}

	number = number.split('');
	if (number[0] === "-") {
		number.shift();
		number[0] = `-${number[0]}`;
	}
	let userSumResult = 0;

	switch (number.length) {
		case 3:
			number.forEach((item) => {
				userSumResult += +item;
			});
			console.log(userSumResult);
			return userSumResult;
		default:
			console.log("Length of input > 3 or < 3");
			return "Length of input > 3 or < 3";
	}
}