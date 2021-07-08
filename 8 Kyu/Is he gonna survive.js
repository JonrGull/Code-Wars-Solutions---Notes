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

/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) 

NOTES: Just need to say if bullets/2 is equal or more than dragons.

*/

const hero = (bullets, dragons) => (bullets / 2 >= dragons ? true : false);

test(hero(10, 5), true);
test(hero(7, 4), false);
test(hero(4, 5), false);
test(hero(100, 40), true);
test(hero(1500, 751), false);
test(hero(0, 1), false);
