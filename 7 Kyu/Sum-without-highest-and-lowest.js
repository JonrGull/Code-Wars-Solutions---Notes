"use strict";
// Please don't delete the 'use strict' line above

// Add each number of the array sans the lowest and highest number.

//MY SOLUTION
const sumArray = (array) =>
  (array || Array.of(array)) //creates array if none
    .sort((a, b) => a - b) //sorts, smallest to biggest
    .slice(1, array && array.length - 1) // takes first and last number, makes new array
    .reduce((acc, n) => acc + n, 0); // adds the rest together

test(sumArray([6, 2, 1, 8, 10]), 16); //remove lowest and highest, add the rest

// little more readable.
function sumArray(array) {
  if (array) {
    array.sort(function (a, b) {
      return a - b;
    });
    var newAry = array.slice(1, -1);
    return newAry.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  } else {
    return 0;
  }
}

// Others

// Clever, but pretty unreadable. slice(1,-1), the -1 takes off the second to last one,
sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;

// Top voted, easiest to understand

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
