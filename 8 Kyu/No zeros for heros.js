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

/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway 

*/

// My solution.
function noBoringZeros(number) {
  if (number === 0) return 0; // return if only 0

  let array = number.toString().split("");

  while (array[array.length - 1] === "0") {
    array.pop();
  }
  return +array.join("");
}

// Mike's recursion. Keep dividing by 10 until n / 10 does not have a remainder that equals 0 or n is just 0
function noBoringZeros(n) {
  if (n % 10 !== 0 || n === 0) return n;

  return noBoringZeros(n / 10);
}

// While version - makes it easier to visualize
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }

  return n;
}

// More fleshed out version
function noBoringZeros(x) {
  let a = `${x}`.split("");
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == 0) {
      a.pop();
    } else {
      break;
    }
  }
  return Number(a.join(""));
}

// For my future self - if you don't know how many times you need to iterate, you should do a while loop or use recursion. 
// But this is not an optimal solution.
function noBoringZeros(number) {
  if (number === 0) return 0; // return if only 0

  let array = number.toString().split("");

  for (let i = 0; i < array.length + array.length; i++) {
    if (array[array.length - 1] === "0") {
      array.splice(-1);
    }
  }
  return +array.join("");
}

test(noBoringZeros(1450), 145);
test(noBoringZeros(960000), 96);
test(noBoringZeros(1050), 105);
test(noBoringZeros(-1050), -105);
test(noBoringZeros(-105), -105);
test(noBoringZeros(0), 0);
