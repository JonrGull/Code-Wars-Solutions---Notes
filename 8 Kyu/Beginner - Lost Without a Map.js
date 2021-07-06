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

/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know. */

//My solution
function maps(array) {
  return array.map((num) => num * 2);
}

test(maps([1, 2, 3]), [2, 4, 6]);
test(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
test(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

//Others
//This is what I wanted to do. But had a little trouble trying to figure out how to pass an array with my current tests.
//I'll try to remember this.

// const maps = array => array.map(num => num * 2);
