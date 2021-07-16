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

/* Write a function that rearranges an integer into its largest possible value.

Example (Input --> Output)

123456 --> 654321
105 --> 510
12 --> 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it. */

// Using methods and HOF
/* const superSize = (number) =>
  parseInt(
    number
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

//Iteration

function superSize(number) {
  
} */

// Others
/* 
Ahh this one used .reverse() instead of sort(b-a), that makes a lot more sense. 
*/

/* function superSize(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
} */

// ES6

// const superSize = (n) => parseInt(n.toString().split("").sort().reverse().join(""));

//
/* 
Can also do +num to convert back to a number instead of parseInt
*/
// superSize = (num) => +num.toString().split``.sort((a, b) => b - a).join``;

//Mike's without turning it into a string and no sort()
​
function superSize(num){
  let number = num
  let cache = [];
  let results = 0;
  
  while (number > 0) {
    let lastDigit = number % 10; // to get single digit
    cache.push(lastDigit);
    number = (number - lastDigit) / 10;
  }
  
  let decimalPlace = 0
  while (cache.length > 0) { // in place of sort
    let minValue = Math.min(...cache);
    results += minValue * (10 ** decimalPlace);
    cache.splice(cache.indexOf(minValue), 1);
    decimalPlace++;
  }
  
  return results;
}

test(superSize(69), 96);
test(superSize(513), 531);
test(superSize(2017), 7210);
test(superSize(414), 441);
test(superSize(608719), 987610);
test(superSize(123456789), 987654321);
test(superSize(700000000001), 710000000000);
test(superSize(666666), 666666);
test(superSize(2), 2);
