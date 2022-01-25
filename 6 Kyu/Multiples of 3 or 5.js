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
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */

//This exercise is pretty similar to FizzBuzz
//Input: Number
//Output: Number
function solution(number) {
  if (number < 0) return 0;
  // Check if argument is greater than 0

  let cache = 0; // cache to add values to in loop

  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) cache += i;
    else if (i % 3 === 0) cache += i;
    else if (i % 5 === 0) cache += i;
  }
  return cache;
}

test(solution(10), 23);
test(solution(15), 23);
test(solution(-5), 0);
