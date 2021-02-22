export default function getMonthName() {
  const monthNumber = prompt('Введите число от 1 до 12', 1);
  if (monthNumber < 1 || monthNumber > 12 || isNaN(Number(monthNumber))) {
    console.log('Value < 1 or > 12 or not a Number');
    return 'Value < 1 or > 12 or not a Number';
  }

  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
  console.log(monthArray[monthNumber - 1]);
  return monthArray[monthNumber - 1];
}
