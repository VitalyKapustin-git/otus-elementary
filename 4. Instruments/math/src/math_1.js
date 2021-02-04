export default function checkAngle(a, b, c) {
  return Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)
    || Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2)
    || Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)
    ? 'Прямоугольный треугольник'
    : 'Не прямоугольный треугольник';
}
