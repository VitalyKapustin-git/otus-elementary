import tableSeven from '../src/loops_2';

it('must return correct first and last number', () => {
	jest.spyOn(console, 'log');
	tableSeven();
	expect(console.log).toHaveBeenCalledWith("7 * 1 = 7");
	expect(console.log).toHaveBeenLastCalledWith("7 * 9 = 63");
});