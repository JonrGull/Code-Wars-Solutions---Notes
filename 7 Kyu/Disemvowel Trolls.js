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
      letter.toLowercase() === "a" ||
      letter.toLowercase() === "e" ||
      letter.toLowercase() === "i" ||
      letter.toLowercase() === "o" ||
      letter.toLowercase() === "u"
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

// using filter. This is what I wanted to do
/* function disemvowel(str) {
  const vowels = 'aeiou';
  return str.split('').filter((letter) => !vowels.includes(letter.toLowerCase())).join('');
} */

// ES6
/* function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter((el) => vowels.indexOf(el.toLowerCase() === -1).join(""));
}

test(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"); */

/* vowels.indexOf(el.toLowerCase()) === -1)  is basically saying if (el) isn't found in my vowels array
if it's not, then keep it.  If it is, then its a vowel and we drop it
indexOf will return -1 if it can't find the argument in the given array
 */
