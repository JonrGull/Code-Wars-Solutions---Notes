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
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false 


NOTES
Input: a number that can be positive or negative
Output: A boolean that is true if the given number is a perfect square. A perfect square is basically the same whole number squared.

Using Math.sqrt which returns the square root of a number. 
If we divide a square rooted number by 1, a perfect square should have no remainder.

square root of 4 === 2. 2 % 1 === 0. 4 is a perfect square

square root of 26 === 5.1... 5.1 % 1 !== 0  not a perfect square

square root of 49 === 7. 7%1 === 0. 49 is a perfect square

*/

// My solution

function isSquare(n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
}

test(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
test(isSquare(0), true, "0 is a square number (0 * 0)");
test(isSquare(3), false, "3 is not a square number");
test(isSquare(4), true, "4 is a square number (2 * 2)");
test(isSquare(25), true, "25 is a square number (5 * 5)");
test(isSquare(26), false, "26 is not a square number");
test(isSquare(49), true);
