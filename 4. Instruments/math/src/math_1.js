export default function checkAngle(a, b, c) {
		Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2) || 
		Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2) ||
		Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2) ?
		"Прямоугольный треугольник" : 
		"Не прямоугольный треугольник";
}

// 5, 12, 13 для теста
// 12, 5, 13