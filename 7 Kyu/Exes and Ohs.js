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

// My solution
function XO(str) {
  let countX = str.match(/x/gi) || [].length;
  let countY = str.match(/o/gi) || [].length;

  if (countX.length === countY.length) {
    return true;
  }
  return false;
}

test(assertEquals(XO("xo"), true));
test(assertEquals(XO("xxOo"), true));
test(assertEquals(XO("xxxm"), false));
test(assertEquals(XO("Oo"), false));
test(assertEquals(XO("ooom"), false));
