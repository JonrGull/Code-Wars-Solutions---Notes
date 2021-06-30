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

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highest number is first

// My solution

// function highAndLow(stringOfNumbers) {
//   let result = "";
//   let splitString = stringOfNumbers.split(" ");

// for(let num of splitString){
//   let highest = Math.max(num)
// console.log(highest);

// }
// }
// test(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

// var numbers = [1,2,3,1]
// function ff(array) {

// for (let i = 0; i < numbers.length; i++) {

//   console.log(Math.max(numbers[i]));

//   }
// }

function disemvowel(str) {
  if (str.length === 0) {
    return 0;
  }
  if (str.length === 1) {
    return str;
  }

  let result = "";

  for (let letter of str) {
    if (
      letter.toLowerCase() === "a" ||
      letter.toLowerCase() === "e" ||
      letter.toLowerCase() === "i" ||
      letter.toLowerCase() === "o" ||
      letter.toLowerCase() === "u"
    ) {
      continue;
    }
    result += letter;
  }
  return result;
}

test(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
