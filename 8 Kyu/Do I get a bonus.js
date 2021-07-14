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

/* It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary. 

input: salary === number, bonus === boolean
output: if bonus is true, return salary *10, else return salary

Pretty simple. Let's do with with a ternary operator.
*/

function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

// ES6
const bonusTime = (salary, bonus) => (bonus ? `£${salary * 10}` : `£${salary}`);

test(bonusTime(10000, true), "£100000");
test(bonusTime(25000, true), "£250000");
test(bonusTime(10000, false), "£10000");
test(bonusTime(60000, false), "£60000");
test(bonusTime(2, true), "£20");
test(bonusTime(78, false), "£78");
test(bonusTime(67890, true), "£678900");
