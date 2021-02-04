import sumNumElements from '../src/data_3';

// describe('Sum of elements in number', () => {
// 	test('Expect 123 = 6', () => {
// 		let origPrompt = window.prompt;
// 		window.prompt = () => "321";
// 		expect(sumNumElements()).toBe(6);
// 		window.prompt = origPrompt;
// 	});
// })
describe('Sum of elements in number', () => {
  test('Return 6 when enter 123', () => {
    // jest.spyOn - создаю обертку для метода объекта
    // далее с помощью метода обертки mockFn.mockReturnValue подсовываю нужное значение для возврата
    jest.spyOn(window, 'prompt').mockReturnValue('123');
    expect(sumNumElements()).toBe(6);
  });
  test('Return 6 when enter 321', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('321');
    expect(sumNumElements()).toBe(6);
  });
  test('Return "Not a number" when enter []', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('[]');
    expect(sumNumElements()).toBe('Not a number');
  });
  test('Return -2 when enter -512', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('-512');
    expect(sumNumElements()).toBe(-2);
  });
  test('Return msg about length when enter 4355', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('4355');
    expect(sumNumElements()).toBe('Length of input > 3 or < 3');
  });
  test('Return msg about length when enter 0', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('0');
    expect(sumNumElements()).toBe('Length of input > 3 or < 3');
  });
});
