let arrayOfNums = [2, 5, 435, 3, 0, -2, 94, 2, 23, 97];

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
		newArray[index] = el + el;
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
	return min, max;
}

sumOfNums(arrayOfNums);
copyAndIncrease(arrayOfNums);
minAndMax(arrayOfNums);