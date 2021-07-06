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

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case */

/* input: string
output: boolean that results from if two letters repeat in a string. 

change all string to lowercase.
Eliminate the edge case of an empty string
let's create a new object. 
  loop through string and add to object. If a duplicate letter is found, return false.
  else continue loop
  return true

*/

function isIsogram(string) {
  let newString = string.toLowerCase();
  let newObject = {};

  if (string === "") {
    return true;
  }

  for (let letter of newString) {
    //if theres a duplicate value, return false
    if (newObject[letter]) {
      return false;
    }
    //if no duplicates are found, then the object was undefined. Set it to true so it finishes the loop.
    newObject[letter] = true;
  }
  return true;
}

test(isIsogram("Dermatoglyphics"), true);
test(isIsogram("isogram"), true);
test(isIsogram("aba"), false, "same chars may not be adjacent");
test(isIsogram("moOse"), false, "same chars may not be same case");
test(isIsogram("isIsogram"), false);
test(isIsogram(""), true, "an empty string is a valid isogram");

// Other Solutions
//let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);

//RegEx
/* function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
} */
