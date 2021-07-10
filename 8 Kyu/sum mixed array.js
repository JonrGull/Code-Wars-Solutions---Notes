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

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. 

input: array of numbers and strings
output: single number

*/

//Using math to convert array to numbers
function sumMix(array) {
  let total = 0;
  let newArray = [];
  for (let val of array) {
    newArray.push(val * 1);
  }
  for (let value of newArray) {
    total += value;
  }
  return total;
}

// With HOFs and methods

function sumMix(array) {
  return array.map((x) => parseInt(x)).reduce((acc, val) => acc + val);
}

//ES6
const sumMix = (array) =>
  array.map((x) => parseInt(x)).reduce((acc, val) => acc + val);

///// Others

//Instead of parseInt(), this person used map() to just force the JS to convert the string into a number

function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

//////

//Oh wow this one is a little difficult for me to understand. But MDN says it is the Unary plus (+) operator.
// It is a shortcut for converting a string into a number, if it isn't already.

const sumMix = (x) => x.reduce((a, b) => +b + a, 0);

test(sumMix([9, 3, "7", "3"]), 22);
test(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
test(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
