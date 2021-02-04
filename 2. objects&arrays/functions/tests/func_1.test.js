import diff from '../src/func_1';

test('If diff between higher and lower num correct', () => {
	expect(diff(2,5)).toBe(3);
	expect(diff(7,1)).toBe(6);
	expect(diff(-3,-2)).toBe(1);
	expect(diff(0,0)).toBe("eq");
	expect(diff({})).toBe("not a number");
})