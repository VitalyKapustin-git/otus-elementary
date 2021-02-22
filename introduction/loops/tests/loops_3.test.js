import dev from '../src/loops_3';

test('if prompt 10 returns 5', () => {
  jest.spyOn(window, 'prompt').mockReturnValue('10');
  expect(dev()).toBe(5);
});
test('if prompt 3 returns 2', () => {
  jest.spyOn(window, 'prompt').mockReturnValue('3');
  expect(dev()).toBe(2);
});
test('if prompt -3 returns "Not a number or < 1"', () => {
  jest.spyOn(window, 'prompt').mockReturnValue('-3');
  expect(dev()).toBe('Not a number or < 1');
});
test('if prompt {} returns "Not a number or < 1"', () => {
  jest.spyOn(window, 'prompt').mockReturnValue('-3');
  expect(dev()).toBe('Not a number or < 1');
});
