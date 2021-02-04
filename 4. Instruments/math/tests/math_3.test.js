import sqrtFn from '../src/math_3';

test('if return correct value for 2x^2 + 5x + 2', () => {
	jest.spyOn(window, 'prompt').mockReturnValue("2,5,2");
	expect(sqrtFn()).toBe("-0.5 -2");
})

test('if return correct value for 5x^2 + 2x + 2', () => {
	jest.spyOn(window, 'prompt').mockReturnValue("5,2,2");
	expect(sqrtFn()).toBe("Корней нет");
})

test('if return correct value for 4x^2 + 4x + 1', () => {
	jest.spyOn(window, 'prompt').mockReturnValue("4,4,1");
	expect(sqrtFn()).toBe("-0.5");
})