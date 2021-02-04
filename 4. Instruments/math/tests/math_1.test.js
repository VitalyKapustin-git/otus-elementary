import checkAngle from '../src/math_1';

test('If function return correct value for sides which are correct for Pifagor theory', () => {
  expect(checkAngle(5, 12, 13)).toBe('Прямоугольный треугольник');
  expect(checkAngle(12, 5, 13)).toBe('Прямоугольный треугольник');
  expect(checkAngle(1, 5, 3)).toBe('Не прямоугольный треугольник');
});
