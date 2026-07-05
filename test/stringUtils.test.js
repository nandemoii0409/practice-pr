const test = require("node:test");
const assert = require("node:assert");
const { capitalize, reverseString, isPalindrome } = require("../src/stringUtils");

test("capitalize uppercases the first letter", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
});

test("capitalize handles an empty string", () => {
  assert.strictEqual(capitalize(""), "");
});

test("reverseString reverses the characters", () => {
  assert.strictEqual(reverseString("hello"), "olleh");
});

test("isPalindrome returns true for a palindrome phrase", () => {
  assert.strictEqual(isPalindrome("A man a plan a canal Panama"), true);
});

test("isPalindrome returns false for a non-palindrome", () => {
  assert.strictEqual(isPalindrome("hello"), false);
});
