import { expect } from "vitest";
import { test } from "vitest";
import { default as answer } from "./main";

const TEST_DATA = [
  [
    [1, 2, 0, 0, 4, 0, 5],
    [1, 2, 4, 5, 0, 0, 0],
  ],
  [
    [0, 0, 1, 3],
    [1, 3, 0, 0],
  ],
  [
    [0, 0, 2, 0, 5],
    [2, 5, 0, 0, 0],
  ],
  [
    [4, 4, 5],
    [4, 4, 5],
  ],
  [
    [0, 0],
    [0, 0],
  ],
];

test("correct order", () => {
  TEST_DATA.forEach(([input, expected]) => {
    expect(answer(input)).toEqual(expected);
  });
});
test("the same reference", () => {
  TEST_DATA.forEach(([input]) => {
    expect(answer(input)).toBe(input);
  });
});
