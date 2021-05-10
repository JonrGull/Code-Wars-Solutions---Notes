"use strict";
// Please don't delete the 'use strict' line above

//Simple, remove the spaces from the string, then return the resultant string.

//MY SOLUTION

//This uses Regular Expression. Or RegEx. Which is basically crazy shortcuts.
//You can find them on a website to clarify what they do. This one is pretty short, but they can get really long.
function noSpace(x) {
  return x.replace(/\s/g, "");
}

//TESTS
describe("Example tests", () => {
  Test.assertEquals(
    noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"),
    "8j8mBliB8gimjB8B8jlB"
  );
  Test.assertEquals(
    noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
    "88Bifk8hB8BB8BBBB888chl8BhBfd"
  );
  Test.assertEquals(noSpace("8aaaaa dddd r     "), "8aaaaaddddr");
});

//This is a more simple version that doesn't use RegEx.
const noSpace = (x) => x.split(" ").join("");

//More traditional
function noSpace(x) {
  var result = "";
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}
