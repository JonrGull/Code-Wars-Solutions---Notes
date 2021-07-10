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

/* Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained */

/* 
Input: 3 numbers
output: a single number that is the highest possible number after a combination of + and *

Rules: You CANNOT swap the order. 
You can use the same operation more than once.
Always 3 numbers


NOTES:
For example, the first test. The highest number possible is 6
(2+1)*2 = 6
(2+1+1) = 4
1+1+1
(1+2) * 3 = 9

So...we probably don't need Math.max yet. We could use that to find the highest result?
Do I have to have cases that run each test through every combination of expressions, push them into an array, and Math.max it?

This wasn't hard to do, just strange logic.
*/

function expressionMatter(x, y, z) {
  let testOne = x + y + z;
  let testTwo = x * y * z;
  let testThree = (x + y) * z;
  let testFour = x * (y + z);

  return Math.max(testOne, testTwo, testThree, testFour);
}
test(expressionMatter(2, 1, 2), 6);
test(expressionMatter(2, 1, 1), 4);
test(expressionMatter(1, 1, 1), 3);
test(expressionMatter(1, 2, 3), 9);
test(expressionMatter(1, 3, 1), 5);
test(expressionMatter(2, 2, 2), 8);

// Others
// This one is shorter, but it's pretty messy.
const expressionMatter = (a, b, c) =>
  Math.max(
    ...[a * b * c, a + b + c, a * c + b, a + b * c, a * (b + c), (a + b) * c]
  );
