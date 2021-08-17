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
Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).
a little hint: Flexible use of slice() Will make the work more simple.


Loop through array to get single array,
  we want to slice the array from the beginning to the middle, and concat the | to the rest of the sliced array
*/

//My solution
/* This was helpful in figuring out more about slice.
https://stackoverflow.com/questions/31743994/how-to-concat-2-sliced-array
*/
function isolateIt(arr) {
  return arr.map(
    (x) =>
      x
        .slice(0, x.length / 2) // get middle of string, 0 is the start, and x.length/2 should be middle
        .concat("|", x.slice(-x.length / 2)) // concat a "|" to the middle, and concat the end. the -x.length/2 is 'starting' from where we first sliced.
  );
}

// Others - I like this one because it's a little easier to see what's actually happening. It's pretty similar to mine but it's more laid out.
function isolateIt(arr) {
  var array = arr.map(function (item) {
    var itemLength = item.length;

    if (itemLength % 2 === 0) {
      return item.slice(0, itemLength / 2) + "|" + item.slice(itemLength / 2);
    } else {
      return (
        item.slice(0, itemLength / 2) + "|" + item.slice(itemLength / 2 + 1)
      );
    }
  });
  return array;
}

test(isolateIt(["abcd", "efgh"]), ["ab|cd", "ef|gh"]);
test(isolateIt(["abcde", "fghij"]), ["ab|de", "fg|ij"]);
test(isolateIt(["1234", "56789"]), ["12|34", "56|89"]);
