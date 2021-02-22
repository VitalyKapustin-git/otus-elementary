export default function checkCirleInSquare(circle, square) {
  const pi = 3.14;

  if (Number.isNaN(Number(circle)) || Number.isNaN(Number(square))) {
    console.log("Not a number");
    return "Not a number";
  }

  if (Math.sqrt((4 * circle) / pi) <= Math.sqrt(2 * square)) {
    console.log("Круг помещается в квадрат");
    return "Круг помещается в квадрат";
  }
  console.log("Круг не помещается в квадрат");
  return "Круг не помещается в квадрат";
}
