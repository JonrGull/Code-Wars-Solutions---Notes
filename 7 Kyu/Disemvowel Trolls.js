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

//My ugly solution. It works

function disemvowel(str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.length === 1) {
    return str;
  }

  let result = "";

  for (let letter of str) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "A" ||
      letter === "E" ||
      letter === "I" ||
      letter === "O" ||
      letter === "U"
    ) {
      continue;
    }
    result += letter;
  }
  return result;
}

test(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");

/* OTHER SOLUTIONS
Using regex and the replace method
 */
/* function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
} */
