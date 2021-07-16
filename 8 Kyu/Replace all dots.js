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

/* The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null. */

//Had to look up regEx to see what I had to add. original was str.replace(/./, '-');
function replaceDots(str) {
  return str.replace(/\./g, "-");
}

test(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
