export default function sqrtFn() {
  const userInput = prompt('Введите а, b и c в формате a,b,c').split(',');
  const [a, b, c] = userInput;

  const d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return `${x1} ${x2}`;
  }
  if (d === 0) {
    return `${-b / (2 * a)}`;
  }
  return 'Корней нет';
}
