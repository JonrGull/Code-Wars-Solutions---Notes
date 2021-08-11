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

function checkExam(array1, array2) {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") break; // breaks out of current iteration, NOT the loop
    if (array1[i] === array2[i]) total += 4;
    if (array1[i] !== array2[i]) total -= 1;
  }

  if (total < 0) {
    return 0;
  }
  return total;
}

//Mike's other ones
function checkExam(array1, array2) {
  // create a score variable
  let score = 0;

  // Iterate through array1
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") continue;
    if (array2[i] === array1[i]) score += 4;
    if (array2[i] !== array1[i]) score -= 1;
  }

  if (score > 0) {
    return score;
  } else {
    return 0;
  }
}

test(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
test(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
test(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
test(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
