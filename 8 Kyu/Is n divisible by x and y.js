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

/* Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5 */

/* 
3 parameters = n,x,y all numbers. Returns true if n is divisible by both x and y, otherwise false.
Only true if there are no remainders!
*/

//My solution using ES6 syntax and a ternary operator
const isDivisible = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);

test(isDivisible(3, 3, 4), false);
test(isDivisible(12, 3, 4), true);
test(isDivisible(8, 3, 4), false);
test(isDivisible(48, 3, 4), true);

//Others

//This is the highest rated one, but probably a few years old. I'm happy that mine is different!
/* function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
} */
