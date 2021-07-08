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

/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59


input: h,m,s
output: time since midnight in MILLISECONDS

1 hour has 3,600,000 milliseconds
1 min has 60,000 milliseconds
1 second has 1000 milliseconds

I think I need to just multiply everything.
*/

function past(h, m, s) {
  let hour = 3600000;
  let minute = 60000;
  let second = 1000;

  return hour * h + minute * m + second * s;
}

test(past(0, 1, 1), 61000);
test(past(1, 1, 1), 3661000);
test(past(0, 0, 0), 0);
test(past(1, 0, 1), 3601000);
test(past(1, 0, 0), 3600000);

//Others

//I think this one is a little harder to understand what's going on. But it's shorter and doesn't need any variables.
/* function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
} */

//Another one. this one is using Date(). I don't think you need this? But it's still cool.

/* function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
} */
