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

/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] 

input: one number
output: an array of the inputted number counting down

Have empty array for result.

Create loop
  as long as i is less than number, i++
    push to result, number minus 1
  return result
*/

/* function reverseSeq(number) {
  let result = [];

  for (let i = 0; i < number; i++) {
    result.push(number - i);
  }
  return result;
}

// Using methods
function reverseSeq(number) {
  return Array.from(new Array(number), (_, i) => i + 1).reverse();
}

//ES6
const reverseSeq = (number) =>
  Array.from(new Array(number), (_, i) => i + 1).reverse();


// From other people.
// Similar to what I did, only this is using length and pushing it to an array from the back. Basically what .reverse() is already doing.
const reverseSeq = (n) => {
  return Array.from({ length: n }, (_, i) => n - i);
}; */

// Recursion
/* 
Using ES6 syntax.
If number is less than 2, return the number in a single array, so [5] then [4], then [3], [2], finally [1]
then since it can't do anymore, return those single arrays and concat them backwards.
*/
const reverseSeq = (n) => {
  if (n < 2) return [n];
  return [n].concat(reverseSeq(n - 1));
};

test(reverseSeq(5), [5, 4, 3, 2, 1]);
