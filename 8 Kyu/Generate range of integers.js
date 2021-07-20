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

/* Implement a function named generateRange(min, max, step), which 
takes three arguments and generates a range of integers from min to max, with the step. 
The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]

Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)

Empty result array to push to.
We need to push the starting number too, so it should start there. 
let i = the start number, max is going to limit how high our number will go. The tricky part is utilizing step.

  If we do i++, that will just increase min's number by 1. So we need to incorporate step into this count.
  We need to just add step and min each loop.
  Then just push i. 
 First loop, i starts at 2, yes 2 is less than 10, so let's reassign i. i = i + step

 */

/* function generateRange(min, max, step) {
  let result = [];

  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
} */

// Recursion

/* 
Each time we pass in min, max, step, and the array
The only parameters that change are min, because we will use a similar technique from before by reassigning min to min + step

So the first loop needs to push min, then we call the function again. Only that this time, min is now min+step and so on.

So 2 gets push because min = 2. Then we call the function again and now min = 2 + 2 which is 4, 4 is pushed. Etc.

*/
function generateRange(min, max, step, array = []) {
  if (min > max) {
    return array;
  }

  array.push(min);

  return generateRange((min += step), max, step, array);
}

///////Others Recursion - But I don't know how this works. Never seen a function call with spread
function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

//////////// Mike's
function generateRange(min, max, step, array = [min]) {
  min = min + step;
  if (min > max) {
    return array;
  }

  return generateRange(min, max, step, [...array, min]);
// the [...array] is just saying take everything in array, and add the new min to the end
//And the next call, array will have that min, then adding the next min, it keeps building on itself
}

test(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
test(generateRange(1, 11, 2), [1, 3, 5, 7, 9, 11]);
test(generateRange(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
