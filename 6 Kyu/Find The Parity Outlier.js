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
  }
}

/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) 
*/

//Input: array
//output: integer that is different (even or odd) from the rest of the array

//This is ugly, but it works without methods
function findOutlier(array) {
  let evenArray = [];
  let oddArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) evenArray.push(array[i]);
    else oddArray.push(array[i]);
  }
  if (evenArray.length === 1) return +evenArray;
  if (oddArray.length === 1) return +oddArray;
}
test(findOutlier([0, 1, 2]), 1);
test(findOutlier([1, 2, 3]), 2);
test(findOutlier([2, 6, 8, 10, 3]), 3);
test(findOutlier([0, 0, 3, 0, 0]), 3);
test(findOutlier([1, 1, 0, 1, 1]), 0);
