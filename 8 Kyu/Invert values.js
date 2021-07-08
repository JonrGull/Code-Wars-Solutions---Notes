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

/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. */

/* I was able to copy the same idea from the 'lost without map' challenge! */

const invert = (array) => array.map((num) => num * -1);

test(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
test(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
test(invert([]), []);
test(invert([0]), [-0]);

//Others
/* 
This is similar to mine, but it's a little strange. So num is basically array[i]. So -array[i] is just the same thing. It's weird how it does it so secretly.
*/
// const invert = array => array.map(num => -num);
