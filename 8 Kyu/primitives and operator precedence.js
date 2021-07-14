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

/* 1 < 2 < 3 === true right? but could

3 < 2 < 1 === true too??

Here's your puzzle: Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:

greaterThanLessThan(1, 2 3) === true
and

greaterThanLessThan(3, 2 1) === true
But also

graterThanLessThan(-3, -2, -1) == false
with more examples on the expected behavior in the test cases. 

NOTES:
True === 1
False === 0
This one wasn't hard after just looking at the tests.
The comparisons operators equate left to right. And they go in pairs and finally compare to the last one.

Number(null) will equate to 0. So, 0 < 0 < 1 //true
-9 < -8 < -7 // false This first does (-9 < -8) which is true. Then it compares (true < -7) which is false.
Truthy has a value of 1, so it's really comparing (1 < -7)

*/

function greaterThanLessThan(a, b, c) {
  return a < b < c;
}
//ES6
const greaterThanLessThan = (a, b, c) => a < b < c;

test(greaterThanLessThan(Number(null), 0, 1), true);
test(greaterThanLessThan(700000000001, 700000000002, -1), false);
test(greaterThanLessThan(-9, -8, 7), true);
test(greaterThanLessThan(-9, -8, -7), false);
