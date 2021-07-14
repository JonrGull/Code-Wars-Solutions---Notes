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

/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. 


We are changing words that have numbers in them and correcting them to their letter counterpart.

5 -> S
0 -> O
1 -> I

input:string
output:string

*/

function correct(string) {
  let results = "";

  for (let letters of string) {
    if (letters === "1") {
      results += "I";
    } else if (letters === "5") {
      results += "S";
    } else if (letters === "0") {
      results += "O";
    } else {
      results += letters;
    }
  }
  return results;
}

// ES6 with split and map. We need to use split to convert the string into a proper array data type.
const correct = (string) =>
  string
    .split("")
    .map((x) => {
      return x === "0" ? "O" : x === "1" ? "I" : x === "5" ? "S" : x;
    })
    .join("");

// Others
/* 
This is probably the most accepted one.
*/
const correct = (s) =>
  s.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

test(correct("L0ND0N"), "LONDON");
test(correct("DUBL1N"), "DUBLIN");
test(correct("51NGAP0RE"), "SINGAPORE");
test(correct("BUDAPE5T"), "BUDAPEST");
test(correct("PAR15"), "PARIS");
