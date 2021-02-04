export default function printStrLength(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    console.log('Value not a string');
    return 'Value not a string';
  }
  console.log(`Length of two stings is => ${string1.length + string2.length}`);
  return string1.length + string2.length;
}
