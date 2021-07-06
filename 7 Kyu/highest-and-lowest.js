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

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highest number is first

// My solution

function highAndLow(stringOfNumbers) {
  let newArray = stringOfNumbers.split(" ").map((x) => x * 1);
  let highest = Math.max(...newArray);
  let lowest = Math.min(...newArray);

  return `${highest} ${lowest}`;
}

test(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

// Others

// Ahh this is probably what I should have done instead. Math can convert an individual string of numbers automatically.
/* function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
} */

// I think this is a little less readable, but it is shorter.
/* function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
} */
