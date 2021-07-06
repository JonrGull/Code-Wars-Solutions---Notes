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

/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7 */

/* 
Notes: using eval() works, but mdn says NEVER to use eval because it could run malicious code. But it's nice to know how it works

 */

const basicOp = (operation, number1, number2) =>
  eval(number1 + operation + number2);

test(basicOp("+", 4, 7), 11);
test(basicOp("-", 15, 18), -3);
test(basicOp("*", 5, 5), 25);
test(basicOp("/", 49, 7), 7);

//Others
/* 
This is probably best practice? A little length, but faster and safer than eval()
*/
/* function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
} */

//Using if statements
/* function basicOp(o, v1, v2)
{
 if (o === '+') return v1 + v2;
 if (o === '-') return v1 - v2;
 if (o === '/') return v1 / v2;
 if (o === '*') return v1 * v2;
} */

// This one is really cool, but I don't quite understand it. It looks like this person changed how the tests run?

/* const basicOperations = {
  '+': (a,b) => a + b,
  '-': (a,b) => a - b,
  '*': (a,b) => a * b,
  '/': (a,b) => a / b,
}

const basicOp = (op, x, y) => basicOperations[op](x, y) */
