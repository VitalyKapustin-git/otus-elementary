export default function dev() {
  let userInput = prompt("Введите число > 1", 1);
  if (Number.isNaN(Number(userInput)) || Number(userInput) < 1) {
    return "Not a number or < 1";
  }
  userInput = Number(userInput);
  if (userInput % 2 === 0) {
    userInput -= 1;
  }
  let sum = 0;
  let divider = 0;
  for (let i = 1; i <= userInput; i += 2) {
    sum += i;
    divider += 1;
  }
  console.log(sum / divider);
  return sum / divider;
}
