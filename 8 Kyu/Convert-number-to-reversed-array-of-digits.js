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

/* Your task is to create a function that does four basic mathematical operations.

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

/* 
I have a lot of ideas, but am unsure of how to implement them. I need to convert one large number and break it into an array.
I could do a literal array, but I don't know if I can break up the number like that.


After playing around with it and wanting to use a bunch of methods, I got it to work by playing with .map and Number. I wasn't exactly sure
if Number could be used like this, but I guess it can be used!

*/

const digitize = (n) => n.toString().split("").reverse().map(Number);

test(digitize(35231), [1, 3, 2, 5, 3]);
