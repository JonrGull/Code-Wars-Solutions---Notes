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

/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 


NOTES:
input:array
output: single integer of all array elements multiplied together.

*/

//Iteration
function grow(array) {
  let total = 1; //can't be 0 because it will then multiply everything by 0.

  for (let value of array) {
    total *= value;
  }
  return total;
}

//ES6 with reduce
//const grow = (array) => array.reduce((a, b) => a * b);

test(grow([1, 2, 3]), 6);
test(grow([4, 1, 1, 1, 4]), 16);
test(grow([2, 2, 2, 2, 2, 2]), 64);
