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

/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. 

string of numbers

NOTES:
Split into array
add string to add numbers to total 

loop through each number with conditional and += to total.

*/

//My solution
function fakeBin(numString) {
  let array = numString.split("");

  let result = "";
  for (let num of array) {
    if (num < 5) {
      result += 0;
    }
    if (num >= 5) {
      result += 1;
    }
  }
  return result;
}

test(fakeBin("45385593107843568"), "01011110001100111");
test(fakeBin("509321967506747"), "101000111101101");
test(fakeBin("366058562030849490134388085"), "011011110000101010000011011");

/* Others

Aw man! I should have been able to do this by myself but I didn't think .map could do a conditional.
.map here makes a new variable to go through the array.
Then says if n is less than 5, return 0, else return 1. And then join them together in a string. Okay I'll have to 
remember that .map can do conditionals like this.
*/

/* function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
} */
