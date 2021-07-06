"use strict";
// Please don't delete the 'use strict' line above

let actual;
let expected;

function test(actual, expected) {
  if (actual === expected) {
    console.log("YAY PASSED");
  } else {
    console.error("FAILED. KEEP TRYING");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

/* 0.5 liters of water per hour

input: time in hours
output : liters of water 0.5 liters every hour. Rounded down.


*/

// My solution
/* Pretty simple! But proud I got this one on the first try. */
const litres = (time) => Math.floor(time / 2);

test(litres(2), 1, "should return 1 litre");
test(litres(1.4), 0, "should return 0 litres");
test(litres(12.3), 6, "should return 6 litres");
test(litres(0.82), 0, "should return 0 litres");
test(litres(11.8), 5, "should return 5 litres");
test(litres(1787), 893, "should return 893 litres");
test(litres(0), 0, "should return 0 litres");

//Others
//This is the same, but keeps it a little more true to the same numbers of the problem. Math can be tricky.
/* function litres(time) {
  return Math.floor(time * 0.5);
} */
