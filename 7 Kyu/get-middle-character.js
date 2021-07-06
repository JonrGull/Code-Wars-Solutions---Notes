"use strict";
// Please don't delete the 'use strict' line above

let actual;
let expected;

function test(actual, expected) {
  if (actual === expected) {
    console.log("YAY PASSED");
  } else {
    console.error("FAILED. KEEP TRYING");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

//MY SOLUTION

//input: string
// output: if string is odd, take out middle character, if even, take out middle two characters
// using split we can make our string into an array.
// Conditional that separates odd and even length arrays
// We need to use math.floor because if we split an odd array, we will get a float number.

//else return (the evens array) and we need to return the middle letter, and the one before it. concat them together due to split

function getMiddle(string) {
  const array = string.split("");

  // If array is odd, return the middle character
  if (array.length % 2 === 1) {
    return array[Math.floor(array.length / 2)];
    // else, return the middle and the next character after it.
  } else return array[array.length / 2 - 1] + array[array.length / 2];
}

// Others

/* I haven't seen .substr() before. It seems similar to splice */
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

/* Wow this was done without a conditional and using only slice. */
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

test(getMiddle("test"), "es");
test(getMiddle("middle"), "dd");
test(getMiddle("testing"), "t");
test(getMiddle("A"), "A");
