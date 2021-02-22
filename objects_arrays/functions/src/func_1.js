export default function diff(num1, num2) {
  if (num1 === num2) {
    return "eq";
  }
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
    return "not a number";
  }
  return num1 > num2 ? num1 - num2 : num2 - num1;
}
