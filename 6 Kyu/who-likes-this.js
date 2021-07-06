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

/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this" */

//My solution

/* input: array of names
output: string

We probably need a for loop instead of for...of. 
Template literal

if array is over 4 then it uses `${number}` others like this
*/

///////////////////UNFINISHED
function likes(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array.length < 1) {
      result += "no one likes this";
    } else if (array.length < 3) {
      result = `${array[i]} and ${array[i + 1]} likes this`;
    }
  }
  return result;
}

test(likes([]), "no one likes this");
test(likes(["Peter"]), "Peter likes this");
test(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
// test(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
// test(
//   likes(["Alex", "Jacob", "Mark", "Max"]),
//   "Alex, Jacob and 2 others like this"
// );
