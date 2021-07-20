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

/* You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2". 

input: one long sting of day,month,day and time separated by spaces and a comma
output: Only the Day, month, and day.

Can We just delete everything after the comma?


*/

// Without any methods or HOF
function shortenToDate(longDate) {
  let result = "";

  for (let letter of longDate) {
    if (letter === ",") {
      break; // or return result works too.
    }
    result += letter;
  }
  return result;
}

//With methods
function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(","));
}

// Using split and shift.
function shortenToDate(longDate) {
  return longDate.split(",").shift();
}

//This way too. Slice makes an array, so just return the first part of the array which is the Day, month ,date.
function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

// Only slice
function shortenToDate(longDate) {
  let result = "";

  for (let i = 0; i < longDate.length; i++) {
    result += longDate[i];
    if (longDate[i] === ",") {
      return result.slice(0, [i]);
    }
  }
  return result;
}

test(shortenToDate("Friday May 2, 9am"), "Friday May 2");
test(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
test(shortenToDate("Monday December 25, 10pm"), "Monday December 25");

// Others - This one is weird. It's similar to split, but I have never seen [|] before. I also think they used an invisible character. Just for fun.
shortenToDate = (ﾠ) => ﾠ.split`, `[ﾠ | ﾠ];
