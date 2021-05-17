"use strict";
// Please don't delete the 'use strict' line above

//This code does not execute properly. Try to figure out why.

//MY SOLUTION

// Number-to-string

//123 --> "123"
//999 --> "999"

//Pretty basic using the method
function numberToString(num) {
  return num.toString();
}

// I tried to use arrow functions. I had to remember to capitalize the To!
const numberToString = (num) => num.ToString();

// I thought this was interesting. I think it is called a string constructor which can also copy strings.
function numberToString(num) {
  return String(num);
}
