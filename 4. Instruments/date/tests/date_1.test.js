import getWeekDay from '../src/date_1';

test('if return correct day number from user date input', () => {
	jest.spyOn(window, 'prompt').mockReturnValue("04.02.2021");
	expect(getWeekDay()).toBe(4);
	expect(getWeekDay()).not.toBe(2);
})