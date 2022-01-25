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

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

//Input: number
//Output: SINGLE digit number

function digital_root(num) {
  // if num is less than 10, return num
  if (num < 10) return num;

  //else we need to split num and then add its parts together
  let cache; // need to hold on to this value to pass again next recursion call

  if (num.toString().length !== 1) {
    cache = num
      .toString()
      .split("")
      .map((n) => Number(n))
      .reduce((acc, curr) => acc + curr);
  }
  return digital_root(cache);
}

test(digital_root(1), 1);
test(digital_root(16), 7);
test(digital_root(456), 6);
test(digital_root(493193), 2);

// Pure Math, mind blowing solution

/* 
function digital_root(n) {
  return (n - 1) % 9 + 1;
} 
*/
