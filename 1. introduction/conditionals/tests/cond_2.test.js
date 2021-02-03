import getMonthName from '../src/cond_2';

describe('Lets check if the larger number returns', () => {
	test('If return January then prompt 1', () => {
		jest.spyOn(window, "prompt").mockReturnValue("1");
		expect(getMonthName()).toBe("January");
	})
	test('If return "Value < 1 or > 12 or not a Number" then prompt 0', () => {
		jest.spyOn(window, "prompt").mockReturnValue("0");
		expect(getMonthName()).toBe("Value < 1 or > 12 or not a Number");
	})
	test('If return "Value < 1 or > 12 or not a Number" then prompt {}}', () => {
		jest.spyOn(window, "prompt").mockReturnValue("{}");
		expect(getMonthName({})).toBe("Value < 1 or > 12 or not a Number");
	})
})