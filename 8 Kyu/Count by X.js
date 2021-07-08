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

/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] 

input: two number parameters
output: an array of numbers

so x is our starting number and it just add by x each loop
n is our array length

countby x, n times.
*/

//My solution
function countBy(x, n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

test(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Array does not match");
test(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match");

// Others
/* 
I've never heard of Array.from() before. It is a static method that creates a new, shallow-copy of an Array, array-like, or another iterable object.
This is pretty unreadable however.
*/
// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

//Mike's
// Iterative:

function countBy(x, n) {
  const cache = [x];

  for (let i = 0; i < n - 1; i++) {
    cache.push(cache[i] + x);
  }

  return cache;
}

// HOF:

function countBy(x, n) {
  const cache = [];

  for (let i = 1; i <= n; i++) {
    cache.push(i);
  }

  return cache.map((num) => num * x);
}

// Recursive:

function countBy(x, n, i = 0, array = [x]) {
  if (array.length === n) {
    return array;
  }

  return countBy(x, n, i + 1, (array = [...array, array[i] + x]));
}
