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

/* Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

NOTES:
input: number - US floor
output: number - UK floor

American ground floor = 1, no 13th floor
So we could do if number is less than 13, num - 1, else num - 2

We need to consider basement floors too, in this case, we are looking at negative numbers
*/

//Iteration
/* function getRealFloor(number) {
  if (number <= 0) {
    return number;
  } else if (number < 13) {
    return number - 1;
  } else {
    return number - 2;
  }
} */

//ES6 with multiple ternary operators. Looks pretty messy but it's good to try.
const getRealFloor = (n) => (n <= 0 ? n : n < 13 ? n - 1 : n - 2);

test(getRealFloor(0), 0);
test(getRealFloor(5), 4);
test(getRealFloor(15), 13);
test(getRealFloor(16), 14);
