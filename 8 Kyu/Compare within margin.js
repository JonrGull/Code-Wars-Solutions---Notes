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

/* Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:

When a is close to b, return 0.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.

Example 1
If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

This is because a and b are no more than 3 numbers apart.

Example 2
If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

This is because the distance between a and b is greater than 0, and a is less than b.


NOTES: 
This sounds....really confusing.

input: three numbers
output: one single number that can be -1,0,1

This is the hard part
a is considered "close to" b if margin is greater than or equal to the distance between a and b.

The issue is the last test with the decimal. I want to use Math.abs() or something to convert it, is that cheating?


*/
//My solution - it works but it seems wrong.
function closeCompare(a, b, margin) {
  if (margin >= Math.abs(a - b)) return 0;
  if (a > b) return 1;
  if (a < b) return -1;
  else return 0;
}

// Mike's - I think this is what the creator wanted.

function closeCompare(a, b, margin = 0) {
  // set margin to 0, UNLESS given a value. This makes it 'optional'
  if (a > b + margin) return 1;
  if (a < b - margin) return -1;

  return 0;
}
/* 
if(-6 > -5 + -1) would be (-6 > -6) and is false. Will return 0
*/

test(closeCompare(4, 5), -1);
test(closeCompare(5, 5), 0);
test(closeCompare(6, 5), 1);
test(closeCompare(-6, -5), -1);
test(closeCompare(2, 5, 3), 0);
test(closeCompare(8.1, 5, 3), 1);
test(closeCompare(1.99, 5, 3), -1);
