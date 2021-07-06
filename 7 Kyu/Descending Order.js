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

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

//MY SOLUTION

//input number
// output numbers rearranged highest - lowest
// convert to string, use sort then highest to lowest, join together.
//Similar to the square digit one! So I will takes some notes from the other coders

function descendingOrder(number) {
  return Number(
    ("" + number)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

test(descendingOrder(0), 0);
test(descendingOrder(1), 1);
test(descendingOrder(111), 111);
test(descendingOrder(15), 51);
test(descendingOrder(1021), 2110);
test(descendingOrder(123456789), 987654321);

