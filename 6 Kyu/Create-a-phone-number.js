"use strict";
// Please don't delete the 'use strict' line above

let actual;
let expected;

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses! 
*/

// Input array of 10 numbers
// Output: String of numbers, first three numbers are inside parenthesis, space, then 3 numbers with a dash, then the remaining 4
//My incredibly simple solution
/* 
function createPhoneNumber(numbers) {
  let cache = "";
  let convertString = numbers.join("").toString();

  for (let i = 0; i < convertString.length; i++) {
    if (cache.length === 0) {
      cache += "(";
    }
    if (cache.length === 4) {
      cache += ") ";
    }
    if (cache.length === 9) {
      cache += "-";
    }

    cache += convertString[i];
  }
  return cache;
} 
*/
// After looking around a bit more
function createPhoneNumber(array) {
  let format = "(xxx) xxx-xxxx";

  for (const num of array) {
    format = format.replace("x", num);
  }
  return format;
}

test(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
test(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
test(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
