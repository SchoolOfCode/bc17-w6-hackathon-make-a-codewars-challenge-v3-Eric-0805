Plan for Each Level
Level 1: Test for Non-Palindromes
Objective: Check if a string is not a palindrome.

Thought Process:

Identify the Palindrome: To determine if a string is a palindrome, compare the cleaned string with its reversed version.
Return the Inverse: For this level, you want to return true if the string is not a palindrome, and false if it is. This essentially flips the result of the palindrome check.
Steps:

Clean the string to remove non-alphanumeric characters and convert it to lowercase.
Compare the cleaned string with its reverse.
Return true if they are not equal (i.e., the string is not a palindrome), and false otherwise.
Example:

Input: "hello"
Process: Clean "hello" (remains "hello") and compare with its reverse "olleh".
Output: true (since "hello" is not a palindrome).
Level 2: Test for Simple Palindromes
Objective: Check if a string is a palindrome.

Thought Process:

Standard Palindrome Check: Determine if the cleaned string reads the same forwards and backwards.
Simple Case: This level requires the basic palindrome test without any additional conditions.
Steps:

Clean the string as before.
Compare the cleaned string with its reverse.
Return true if they are equal (i.e., the string is a palindrome), and false otherwise.
Example:

Input: "racecar"
Process: Clean "racecar" (remains "racecar") and compare with its reverse "racecar".
Output: true (since "racecar" is a palindrome).
Level 3: Test for Long Palindromes
Objective: Check if a string is a palindrome and is longer than 12 characters.

Thought Process:

Combine Palindrome Check with Length Check: Extend the palindrome check to also ensure the string is longer than 12 characters.
Additional Condition: Introduce an additional constraint on length.
Steps:

Clean the string.
Check if the cleaned string is a palindrome.
Ensure the length of the cleaned string is greater than 12.
Return true if both conditions are met; otherwise, return false.
Example:

Input: "A man, a plan, a canal, Panama!"
Process: Clean "A man, a plan, a canal, Panama!" to "amanaplanacanalpanama", check if it's a palindrome, and verify the length.
Output: true (since it is a palindrome and longer than 12 characters).
Level 4: Test for Numeric Palindromes
Objective: Check if a date string is a palindrome when considering only numeric characters.

Thought Process:

Numeric Extraction: Remove all non-numeric characters from the string.
Palindrome Check for Numbers: Determine if the resulting numeric string is a palindrome.
Steps:

Clean the string by removing non-numeric characters.
Check if the numeric string is a palindrome.
Return true if it is a numeric palindrome; otherwise, return false.
Example:

Input: "10-02-2001"
Process: Clean "10-02-2001" to "10022001", check if it's a palindrome.
Output: true (since "10022001" is a palindrome).
Level 5: Test for Alphanumeric Palindromes
Objective: Check if a string contains both letters and numbers and is a palindrome.

Thought Process:

Combined Check: Ensure the string contains both letters and numbers.
Palindromic Nature: After verifying the presence of both types of characters, check if the string is a palindrome.
Steps:

Clean the string to remove non-alphanumeric characters.
Verify the presence of both letters and numbers in the cleaned string.
Check if the cleaned string is a palindrome.
Return true if the string contains both types of characters and is a palindrome; otherwise, return false.
Example:

Input: "A1b2b2B1a"
Process: Clean "A1b2b2B1a" to "a1b2b2b1a", check for both letters and numbers, and determine if it's a palindrome.
Output: true (since "a1b2b2b1a" contains both letters and numbers and is a palindrome).

Summary

Each level builds upon the previous one, introducing new conditions or constraints:

Level 1: Basic check for non-palindromes.
Level 2: Basic palindrome check.
Level 3: Palindrome check with a length constraint.
Level 4: Palindrome check focusing only on numeric characters.
Level 5: Palindrome check requiring both letters and numbers.

This incremental approach helps in understanding how to handle different aspects of string manipulation and palindromic checks.

Throughout the development of this project, I tested the functionality with the main.js file. I created an main.answers.js file which to keep these answers, and then added that file to the gitignore.
