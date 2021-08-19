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

/* Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The input array will always contain only positive numbers and will never be empty or null. 

If square root of number can be returned, do so, otherwise, square number.

input: array of numbers
output: array of numbers that have been been squared or returned square root respectively

initialize new array
loop through given array
  if number can be squared root'd with no remainder, do so
  otherwise, return square root
*/

function squareOrSquareRoot(array) {
  let result = [];

  for (let number of array) {
    let squareRoot = Math.sqrt(number);

    if (parseInt(squareRoot) === squareRoot) {
      result.push(squareRoot);
    } else {
      result.push(number * number);
    }
  }
  return result;
}

//Bitwise
/* function squareOrSquareRoot(array) {
  let result = [];

  for (let number of array) {
    let squareRoot = Math.sqrt(number);

    if (squareRoot === +squareRoot && squareRoot === (squareRoot | 0)) {
      // bitwise operator
      result.push(squareRoot);
    } else {
      result.push(number * number);
    }
  }
  return result;
} */

// isInteger
/* function squareOrSquareRoot(array) {
  const cache = [];
  
  for (let value of array) {
    const squareRoot = Math.sqrt(value)
    if (Number.isInteger(squareRoot)) {
      cache.push(squareRoot);
    } else {
      cache.push(value ** 2)
    }
  }
  return cache;
} */

// ES6 anf HOF
/* function squareOrSquareRoot(array) {
  return array.map((nums) =>
    Number.isInteger(Math.sqrt(nums)) ? Math.sqrt(nums) : Math.pow(nums, 2)
  );
} */

// Failed solution - possibly wrong logic?
/* function squareOrSquareRoot(array) {
  let result = [];
​
  for (let number of array) {
    let squareRoot = Math.sqrt(number);
​
    if (squareRoot % 2 === 0 || squareRoot % 3 === 0) {
      result.push(squareRoot);
    } else {
      result.push(number * number);
    }
  }
  return result;
} */

test(squareOrSquareRoot([4, 3, 9, 7, 2, 1]), [2, 9, 3, 49, 4, 1]);
test(squareOrSquareRoot([100, 101, 5, 5, 1, 1]), [10, 10201, 25, 25, 1, 1]);
test(squareOrSquareRoot([1, 2, 3, 4, 5, 6]), [1, 4, 9, 2, 25, 36]);
