export default function checkAngle(a, b, c) {
  return a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === a ** 2 + c ** 2 ||
    c ** 2 === a ** 2 + b ** 2
    ? "Прямоугольный треугольник"
    : "Не прямоугольный треугольник";
}
