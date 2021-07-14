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

/* Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. 

NOTES:

We are making a multiplication table. That starts from 1-10 * number

We will start with an initial empty string to add to later
  So we probably need to use a for loop because we need to use [i]
  inside the loop, we need to have the syntax and use /n.

  The thing to worry about is the trailing \n at the end of the loop. I know there's a RegEx code I could
  use. Do I need it?
  I found I can use .trim()
*/

function multiTable(number) {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}\n`;
  }
  return result.trim();
}

test(
  multiTable(5),
  "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50"
);
test(
  multiTable(1),
  "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10"
);

// Others
/* 
Ah this was a better one to use because we don't need to use a method at the end. This makes a ternary operator 
that says 'if it is less than 10, add a line, otherwise do nothing"

I like this one.
*/

const multiTable = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};
