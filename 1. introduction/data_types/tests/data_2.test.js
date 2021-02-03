import printStrLength from '../src/data_2';

describe('Lets check length of strings', () => {
	test('Count length of `count length`', () => {
		expect(printStrLength("count ", "length")).toBe(12);
	});
	test('Check with {}', () => {
		expect(printStrLength({},)).toBe("Value not a string");
	});
	test('Empty strings', () => {
		expect(printStrLength("", "")).toBe(0);
	});
})