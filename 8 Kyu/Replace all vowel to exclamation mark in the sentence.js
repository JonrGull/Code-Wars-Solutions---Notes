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

/* Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

// With Replace
function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}

// Loop and indexof
function replace(s) {
  let result = "";
  let vowels = "aAeEiIoOuU";
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      result += s[i];
    } else {
      result += "!";
    }
  }
  return result;
}

// With includes
function replace(s) {
  let result = "";
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let character of s) {
    if (vowels.includes(character)) {
      result += "!";
    } else {
      result += character;
    }
  }
  return result;
}

test(replace("Hi!"), "H!!");
test(replace("!Hi! Hi!"), "!H!! H!!");
test(replace("aeiou"), "!!!!!");
test(replace("ABCDE"), "!BCD!");
