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

/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. 

So it repeats each letter by +1 each time and separates it with a hyphen
*/
//input string
//output string that repeats each letter of entered string, plus 1. So it goes 1,2,3,4 etc. Each new letter is capitalized!

// for loop? multiply letter(?) by i of loop?
function accum(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
  }
  return result.join("-");
}

test(accum("aBcd"), "A-Bb-Ccc-Dddd");
