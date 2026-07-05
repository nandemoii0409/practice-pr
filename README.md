# practice-pr

A tiny string utilities library, created to practice the GitHub pull request workflow.

## Functions

- `capitalize(str)` - uppercases the first letter of a string.
- `reverseString(str)` - reverses the characters of a string.
- `isPalindrome(str)` - checks whether a string is a palindrome (ignoring case and non-alphanumeric characters).

## Usage

```js
const { capitalize, reverseString, isPalindrome } = require("./src/stringUtils");

capitalize("hello"); // "Hello"
reverseString("hello"); // "olleh"
isPalindrome("A man a plan a canal Panama"); // true
```

## Running tests

```sh
npm test
```
