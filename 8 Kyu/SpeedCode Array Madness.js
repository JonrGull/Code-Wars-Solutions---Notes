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
SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of
the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

NOTES: 
Input: two arrays
output: boolean

a = the first array squares all elements and has one sum
b = the second array cubes all elements and has one sum

if a > b -> true

So I think we need 2 loops because one needs to square while the other needs to cube.
  then we have to add them together respectively, then compare the sums of both.

  So we need to initialize a variable for both loops to track a and b sums

  loop through both, which squares or cubes

*/

 function arrayMadness(a, b) {
  let totalA = 0;
  let totalB = 0;
  for (let value of a) {
    totalA += value ** 2;
  }
  for (let value of b) {
    totalB += value ** 3;
  }
  if (totalA > totalB) {
    return true;
  }
  return false;
}
//With maps and reduce
 function arrayMadness(a, b) {
  let totalA = a.map((x) => x ** 2).reduce((acc, val) => acc + val);
  let totalB = b.map((x) => x ** 3).reduce((acc, val) => acc + val);
  return totalA > totalB
}

//OTHERS

//This one is similar to what I did, only as a one liner. While good, I think makes it a little harder to read.

const arrayMadness = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);

//I like this one because it only uses reduce to add and multiply. I didn't even consider doing both with just one.

function arrayMadness(a, b) {
  return (
    a.reduce((sum, el) => sum + el ** 2, 0) >
    b.reduce((sum, el) => sum + el ** 3, 0)
  );
}


//////////Mike's - Notes for me

// Iterative
function arrayMadness(a, b) {
  let totalA = 0
  let totalB = 0
  
  for (let i = 0 ; i < Math.max(a.length, b.length) ; i++) {
    totalA += a[i] ** 2 || 0;
    totalB += b[i] ** 3 || 0;
  }
	
  return totalA > totalB;
}

//HOF
function arrayMadness(a,b) {
  let totalA = a.reduce((a,b) => a + (b ** 2),0)  
  let totalB = b.reduce((a,b) => a + (b ** 3),0)
​
  return totalA > totalB;
}
​
// Recursive


function arrayMadness(a, b, aSum = 0, bSum = 0, index = 0) {
  //We have our original arrays, but also parameters that we will need to increment when we run the function again.
  //index will increase which will change the element in the array

  if (!a[index] && !b[index]) {
    return aSum > bSum;
  }
  //if not 4 && 1 then break the loop. So when there are no numbers left, just return the evaluated result (boolean) of comparing two sums

  aSum += a[index] ** 2 || 0;
  // 0 = 4 ** 2 || 0. Set aSum equal to the number square, but if there are no more numbers, add 0. This is for arrays of different lengths.
  bSum += b[index] ** 3 || 0;

  //run the function again with these new parameters. The arrays will be the same, but the sums and the index will change.
  return arrayMadness(a, b, aSum, bSum, index + 1);
}
​
​
// Recursive Refactor
​
function arrayMadness(a, b, aSum = 0, bSum = 0, index = 0) {
  return !a[index] && !b[index] ? aSum > bSum : arrayMadness(a, b, aSum += a[index] ** 2 || 0, bSum += b[index] ** 3 || 0, index + 1)
} 

test(arrayMadness([4, 5, 6], [1, 2, 3]), true);
test(arrayMadness([5, 6, 7], [4, 5, 6]), false);
test(arrayMadness([4, 5, 6], [3, 4, 5]), false);
test(arrayMadness([3, 4, 5], [2, 3, 4]), false);
test(arrayMadness([2, 3, 4], [1, 2, 3]), false);
test(arrayMadness([1, 2, 3], [0, 1, 2]), true);
test(arrayMadness([5, 3, 2, 4, 1], [15]), false);
test(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
test(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
test(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
test(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);