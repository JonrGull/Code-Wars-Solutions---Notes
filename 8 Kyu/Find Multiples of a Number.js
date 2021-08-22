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

/* In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

empty array
  loop
    start at integer number
    until it is less or equal to limit
    add integer to itself and push 

return array
*/

function findMultiples(integer, limit) {
  let result = [];

  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}
// Recursion
/* 
need to create an array that is passed in each time
  we want to keep integer the same number each time, and just add on to the total to be passed to the recursion call

  base case : if integer is greater or equal to limit, return finished array

  push integer (because we need to start at it, we want to push '5' first)
    return the function, but we want to add only the first part of the array, add that to the new integer value so it builds on itself
*/

function findMultiples(integer, limit, array = []) {
  if (integer > limit) {
    return array;
  }

  array.push(integer);
  return findMultiples(array[0] + integer, limit, array);
}

//without push
function findMultiples(integer, limit, array = [integer]) {
  if (integer > limit) {
    return array;
  }
  return findMultiples(array[0] + integer, limit, [...array, integer]);
}

// Other solutions on CW
/* function findMultiples(int, limit) {
  return Array(Math.floor(limit / int))
    .fill(1)
    .map((x, i) => int * (i + 1));
} */

test(findMultiples(5, 25), [5, 10, 15, 20, 25]);
test(findMultiples(1, 2), [1, 2]);
test(findMultiples(5, 7), [5]);
test(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
test(findMultiples(11, 54), [11, 22, 33, 44]);
