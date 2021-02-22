export default function sumNums() {
  let sum = 0;
  for (let i = 50; i < 101; i + 1) {
    sum += i;
  }
  console.log(sum);
  return sum;
}
