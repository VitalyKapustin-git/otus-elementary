export default function getMinutesFromDayStart() {
  const dateNow = new Date();
  return dateNow.getHours() * 60 + dateNow.getMinutes();
}
