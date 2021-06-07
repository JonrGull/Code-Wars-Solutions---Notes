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
/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H */

//MY SOLUTION
// function abbrevName(name) {
//   let splitName = name.split(" ");

// return splitName.map((letter)=>letter[0]).join(".").toUpperCase()

// }

// Without HOF
// function abbrevName(name) {
//   let string = name.toUpperCase();
//   let results = `${name[0]}.`;

//   for (let i = 1; i < string.length; i++) {
//     if (string[i] === " ") {
//       // it checks if theres a space?
//       results += string[i + 1];
//     }
//   }
//   return results;
// }

// test(abbrevName("Sam Harris"), "S.H");
