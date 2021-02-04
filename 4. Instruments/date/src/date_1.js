export default function getWeekDay() {
	let [day, month, year] = prompt('Введите ДД.ММ.ГГГГ').split('.');
	let inputToDate = new Date(year, month, day);
	return inputToDate.getDay();
}