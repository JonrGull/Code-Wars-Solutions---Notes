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
Create a function that will return a string that combines all of the letters of the three inputted strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */
function tripleTrouble(one, two, three) {
  let result = "";

  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
}

//////// For Each
/* 
Since forEach needs to do something to each letter, and it only works on arrays, we have to split each letter into it's own array
We don't need the actual letter, just the index. Because item only works on the first index? item[2] will give us undefined.
But one[index] will give us letters

I'm not sure why item[index] is different from item[0]
*/
function tripleTrouble(one, two, three) {
  let result = "";
  one.split("").forEach(function (item, index) {
    result += one[index] + two[index] + three[index];
  });
  return result;
}

test(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
test(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
test(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
test(tripleTrouble("Sea", "urn", "pms"), "Supermans");
test(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");

/* 
item = individual string "aaa" / "bbb"
index, in this case 0,1,2 because 3 items
array - the entire array
*/

