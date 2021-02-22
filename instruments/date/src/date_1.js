export default function getWeekDay() {
  const [day, month, year] = prompt("Введите ДД.ММ.ГГГГ").split(".");
  const inputToDate = new Date(year, month, day);
  return inputToDate.getDay();
}
