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

/* It's the academic year's end, fateful moment of your school report. 
The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy !
You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. 

NOTES:
So mean calculated by adding up all the numbers in the array, and then dividing by how many there are.

Array.length will tell us how many numbers there are. 
We need to use Math.floor to round down.
*/

//This is the normal, easy way to do it.
/* function getAverage(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return Math.floor(total / array.length);
} */

/*This is my attempt at using filter.
So first we need to encapsulate everything in Math.floor because that will take the remaining value and round down
Then we have reduce, declare our accumulator and current valuable variable.
So reduce will add the array up and accumulate the values. Basically what total += does. It just keeps adding onto itself and then goes on to the next
number.
And then finally it will divide the final number by the array length.

*/
const getAverage = (arr) =>
  Math.floor(arr.reduce((sum, curr) => sum + curr) / arr.length);

test(getAverage([2, 2, 2, 2]), 2);
test(getAverage([1, 2, 3, 4, 5]), 3);
test(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
