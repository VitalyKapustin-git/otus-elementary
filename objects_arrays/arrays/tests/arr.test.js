import { sumOfNums, copyAndIncrease, minAndMax } from "../src/arr";

test("If functions return correct answers", () => {
  expect(sumOfNums([2, 5, 435, 3, 0, -2, 94, 2, 23, 97])).toBe(659);
  expect(copyAndIncrease([1, 2, 3, 4, 5, -2, 6, 7, 23, 10])).toMatchObject([
    2,
    4,
    6,
    8,
    10,
    0,
    12,
    14,
    46,
    20,
  ]);
  expect(minAndMax([2, 5, 435, 3, 0, -2, 94, 2, 23, 97])).toMatchObject([
    -2,
    435,
  ]);
});
