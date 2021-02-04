export default function checkRegex() {
  const userInput = prompt('Enter date(MM/DD/YY) or phone (+71234567890) or email (test@example.com)');
  const dateRegex = new RegExp('^[0-9]{1,31}\/[0-9]{1,12}\/[0-9]{2}$');
  const phoneRegex = new RegExp('^[\+][0-9]{11}$');
  const emailRegex = new RegExp('^[a-zA-Z0-9\.]+\@[a-z]+\.[a-z]{2,5}$');

  if (dateRegex.test(userInput)) {
    return 'date';
  }
  if (phoneRegex.test(userInput)) {
    return 'phone';
  }
  if (emailRegex.test(userInput)) {
    return 'email';
  }
  return 'Invalid input. Try again.';
}
