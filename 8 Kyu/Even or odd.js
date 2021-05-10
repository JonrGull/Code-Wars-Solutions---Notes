"use strict";
// Please don't delete the 'use strict' line above

//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//MY SOLUTION
// Pretty traditional
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//This function uses a conditional (ternary) operator. The "?" Basically it's a shorter if statement
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

//This uses the arrow function. A shorter way to write a function.
const even_or_odd = (n) => (n % 2 ? "Odd" : "Even");
