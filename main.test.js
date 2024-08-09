import { test, expect } from "vitest";
import { isPalindrome } from "./main.js";


test("Level 1: should return true for non-palindromes", () => {
  expect(isPalindrome("hello", 1)).toBe(true); // "hello" is not a palindrome
  expect(isPalindrome("racecar", 1)).toBe(false); // "racecar" is a palindrome
});

test("Level 2: should return true for simple palindromes", () => {
  expect(isPalindrome("racecar", 2)).toBe(true); // "racecar" is a palindrome
  expect(isPalindrome("hello", 2)).toBe(false); // "hello" is not a palindrome
});

test("Level 3: should return true for long palindromes", () => {
  expect(isPalindrome("A man, a plan, a canal, Panama!", 3)).toBe(true); // This is a long palindrome
  expect(isPalindrome("racecar", 3)).toBe(false); // "racecar" is a palindrome but too short
});

test("level 4: should return true for a date that is palindromic number", () => {
  expect(isPalindrome("10-02-2001", 4)).toBe(true); // This date is is palindromic number
  expect(isPalindrome("25-12-2025", 4)).toBe(false); //This date is not a palindromic number
  });

test("level 5: should return true for a palindrome containing both letters and numbers", () => {
  expect(isPalindrome("a1b2b2b1a", 5)).toBe(true); // This is a palindrome and contains both letters and numbers
  expect(isPalindrome("12abBA21", 5)).toBe(true); // This is a palindrome and contains both letters and numbers
});

test("level 5: should return false for a string that is not a palindrome", () => {
  expect(isPalindrome("Hello123", 5)).toBe(false); // Is not a palindrome
});

test("level 5: should return false for a string that contains only letters", () => {
  expect(isPalindrome("AbcdeedCba", 5)).toBe(false); // Is a palindrome but contains only letters
});

test("level 5: should return false for a string that contains only numbers", () => {
  expect(isPalindrome("1234567654321", 5)).toBe(false); // Is a palindrome but contains only numbers
});
