export default function printLarger(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Not a number");
    return "Not a number";
  }
  if (a > b) {
    console.log(a);
    return a;
  }
  console.log(b);
  return b;
}
