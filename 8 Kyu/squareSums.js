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

/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

//My solution
function squareSum(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num * num;
  }
  return total;
}

// Others
/* Using reduce. I need to understand this more. */
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

test(squareSum([1, 2]), 5);
test(squareSum([0, 3, 4, 5]), 50);
test(squareSum([]), 0);
test(squareSum([-1, -2]), 5);
test(squareSum([-1, 0, 1]), 2);
