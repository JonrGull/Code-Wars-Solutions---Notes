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

/* Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1). */

/* 
input: two arrays
output: one array that combines one element from each array one by one so they mix together
*/

function mergeArrays(array1, array2) {
  let result = [];
  let newLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < newLength; i++) {
    if (array1[i] !== undefined) {
      result.push(array1[i]);
    }
    if (array2[i] !== undefined) {
      result.push(array2[i]);
    }
  }

  return result;
}

//Can also take out the undefined and write it this way
function mergeArrays(array1, array2) {
  let result = [];
  let newLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < newLength; i++) {
    if (array1[i]) {
      //if it exists, push it. This will result in a truthy value
      result.push(array1[i]);
    }
    if (array2[i]) {
      result.push(array2[i]);
    }
  }

  return result;
}

test(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]), [
  1,
  "a",
  2,
  "b",
  3,
  "c",
  4,
  "d",
  5,
  "e",
  6,
  7,
  8,
]);
test(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), [
  "a",
  1,
  "b",
  2,
  "c",
  3,
  "d",
  4,
  "e",
  5,
]);
test(mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"]), [
  2,
  "b",
  5,
  "r",
  8,
  "a",
  23,
  "u",
  67,
  "r",
  6,
  "s",
]);
test(
  mergeArrays(
    ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
    [2, 5, 8, 23, 67, 6]
  ),
  ["b", 2, "r", 5, "a", 8, "u", 23, "r", 67, "s", 6, "e", "q", "z"]
);

// Others
//This one is weird to me. But it seems this one works by not worrying about dealing with getting an array.length value.
//It just keeps pushing until it can't. But the counting part is kinda strange, but it works!
function mergeArrays(a, b) {
  var returnArray = [];
  var counter = 0;

  while (a[counter] || b[counter]) {
    if (a[counter]) {
      returnArray.push(a[counter]);
    }
    if (b[counter]) {
      returnArray.push(b[counter]);
    }
    counter++;
  }
  return returnArray;
}
