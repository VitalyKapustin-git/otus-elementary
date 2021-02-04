let sumOfNums = function(array) {
	let sum = 0;
	array.forEach(element => {
		sum += element;
	});
	console.log("!" + sum);
	return sum;
}

let copyAndIncrease = function(array) {
	let newArray = [];
	array.forEach((el, index) => {
		if (el < 0) {
			newArray[index] = el + el * -1;
		} else {
			newArray[index] = el + el;
		}
	});
	console.log("!!" + newArray);
	return newArray;
}

let minAndMax = function(array) {
	let min = 0;
	let max = 0;
	array.forEach((el) => {
		if (el < min) {
			min = el;
		}
		if (el > max) {
			max = el;
		}
	});
	console.log("!!!" + min + " " + max);
	return [min, max];
}

export { sumOfNums, copyAndIncrease, minAndMax };