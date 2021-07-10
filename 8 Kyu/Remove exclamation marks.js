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

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(string) {
  const exclaimMark = "!";

  return string
    .split("")
    .filter((letter) => !exclaimMark.includes(letter))
    .join("");
}

//Others
//Without .includes
const removeExclamationMarks = (str) =>
  str
    .split("")
    .filter((x) => x !== "!")
    .join("");

//
function removeExclamationMarks(s) {
  let cache = "";

  s.split("").forEach((char) => (char !== "!" ? (cache += char) : null));

  return cache;
}

//
// Oh my gosh this makes it look so simple
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

//ES6
const removeExclamationMarks = (string) => string.split("!").join("");

test(removeExclamationMarks("Hello World!"), "Hello World");
test(removeExclamationMarks("Hello World!!!"), "Hello World");
test(removeExclamationMarks("Hi! Hello!"), "Hi Hello");
