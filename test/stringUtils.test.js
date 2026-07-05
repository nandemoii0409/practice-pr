const test = require("node:test");
const assert = require("node:assert");
const { capitalize, reverseString } = require("../src/stringUtils");

test("capitalize uppercases the first letter", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
});

test("capitalize handles an empty string", () => {
  assert.strictEqual(capitalize(""), "");
});

test("reverseString reverses the characters", () => {
  assert.strictEqual(reverseString("hello"), "olleh");
});
