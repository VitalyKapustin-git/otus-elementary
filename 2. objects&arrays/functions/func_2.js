export default function isWord(string) {
	return string.split(' ').length > 1 ? true : false;
}