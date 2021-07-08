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

/* I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

//Iteration with spread operator.
function arrayPlusArray(...arr) {
  let total = 0;

  for (let num of arr) {
    for (let deepNum of num) {
      total += deepNum;
    }
  }
  return total;
}

//Normal way since arrays are same length.
function arrayPlusArray(arr1, arr2) {
  let total = 0;

  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i] += arr2[i];
  }
  return total;
}

//Reduce
function arrayPlusArray(arr1, arr2) {
  let joinedArray = arr1.concat(arr2);

  return joinedArray.reduce((acc, val) => acc + val);
}

test(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
test(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
test(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
test(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

//Others
//Similar to what I did! Only a little harder for me to read.
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a, b) => a + b, 0);
}
