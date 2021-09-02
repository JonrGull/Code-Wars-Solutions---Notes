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

/* 
Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
 */

// My solution
const cannonsReady = (gunners) => {
  let piratesArray = Object.values(gunners);

  if (piratesArray.every((pirateResponse) => pirateResponse === "aye")) {
    return "Fire!";
  }
  return "Shiver me timbers!";
};

//Others
// I haven't seen a good use for some() lately! This was a good one to use it on.
const cannonsReady = (gunners) => {
  return Object.values(gunners).some((m) => m === "nay")
    ? "Shiver me timbers!"
    : "Fire!";
};

var a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" },
  b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

test(cannonsReady(a), "Fire!");
test(cannonsReady(b), "Shiver me timbers!");
