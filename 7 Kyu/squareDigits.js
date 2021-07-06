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

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

/* We have one big number and we need to individually square each number. 
So we want to get the number into an array because that's easier to handle. I want to use split. But it only works on strings.

So first, convert num into string
Split num so we now have an array of string numbers
loop through the array and square each number

join at the end and convert back to number.
*/

//MY SOLUTION

function squareDigits(num) {
  let result = [];

  let stringNum = num.toString();
  let splitNum = stringNum.split("");

  for (let arrayNum of splitNum) {
    result.push(arrayNum * arrayNum);
  }

  return result.join("") * 1;
}

test(squareDigits(3212), 9414);
test(squareDigits(2112), 4114);

// Others
/* This was pretty close to what I did! Only much more elegant. */

/* function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
} */

//This one is good too. Convert num to string, split, and then use map to square the numbers. Finally parseInt at the end. Once again, pretty similar to what I did. Just much better.

/* function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
} */
