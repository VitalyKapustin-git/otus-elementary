export default function printMultSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Entered value not a number");
    return "Entered value not a number";
  }
  console.log(`sum = ${a * b}, multiple = ${a + b}`);
  return `${a * b}, ${a + b}`;
}
