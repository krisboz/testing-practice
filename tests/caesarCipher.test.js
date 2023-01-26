import caesarCipher from "../functions/caesarCipher.js";

test("Caesar cipher basic", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});

test("Caesar cipher z to a", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("Caesar cipher punctuation", () => {
  expect(caesarCipher("ab,cd", 1)).toBe("bc,de");
});
