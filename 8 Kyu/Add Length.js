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

/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. 

input: one string
output: an array with words tied with their length.
*/

function addLength(str) {
  let result = [];
  let splitString = str.split(" ");

  for (let word of splitString) {
    result.push(`${word} ${word.length}`);
  }
  return result;
}

//With map
function addLength(str) {
  return str.split(" ").map((x) => `${x} ${x.length}`);
}

//////////

//// Mike's
function addLength(str, array = [], index = 0) {
  // if the array is empty, split the string.
  if (array.length === 0) {
    array = str.split(" ");
  }
  // if there is no more indexes in the array, return array. Index increases by 1 each time.
  if (!array[index]) {
    return array;
  }
  //array[index] now just has the separated words
// now array[index] is changed to adding the word and length.
  array[index] = `${array[index]} ${array[index].length}`;
  return addLength(str, array, index + 1);
}

///// Little different
/* function addLength(str, index = 0, cache = []) {
  const array = str.split(" ");

  if (!array[index]) {
    return cache;
  }

  return addLength(str, index + 1, [
    ...cache,
    `${array[index]} ${array[index].length}`,
  ]);
}
 */

test(addLength("apple ban"), ["apple 5", "ban 3"]);
test(addLength("you will win"), ["you 3", "will 4", "win 3"]);

// console.log("apple ban".length); //9 INPUT
// console.log(["apple 5", "ban 3"].length); //2 RESULT
// console.log("you will win".length); // 12
// console.log(["you 3", "will 4", "win 3"].length);//3
