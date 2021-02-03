import printMultSum from '../src/data_1';

describe('Multipling and sum', () => {
	test('Test basic nums', () => {
		expect(printMultSum(1, 2)).toBe("2, 3");
	});
	test('Test negative nums', () => {
		expect(printMultSum(-1, 2)).toBe("-2, 1");
	});
	test('Try to pass nothing', () => {
		expect(printMultSum()).toBe("Entered value not a number");
	});
	test('Try to pass empty arrays', () => {
		expect(printMultSum([],[])).toBe("Entered value not a number");
	});
	test('Check floats', () => {
		expect(printMultSum(1.5, 2.5)).toBe("3.75, 4");
	});
});