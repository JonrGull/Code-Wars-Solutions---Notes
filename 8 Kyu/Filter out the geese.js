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

/* Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. 
Note that all of the strings will be in the same case as those provided, and some elements may be repeated. */

// MIKE'S
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // create an array
  const cache = [...birds]; //Copy of birds
  // Loop through [cache] array;
  for (let i = cache.length - 1; i >= 0; i--) {
    // Nested-loop through [geese] array
    for (let j = 0; j < geese.length; j++) {
      // if current geese value === current cache value
      if (cache[i] === geese[j]) {
        // splice value out of cache
        cache.splice(i, 1);
      }
    }
  }
  // return the array
  return cache;
}

//This way makes more sense to me
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (var i = 0; i < birds.length; i++) {
    for (var j = 0; j < geese.length; j++) {
      if (birds[i] === geese[j]) {
        birds.splice(i, 1);
        i--;
      }
    }
  }
  return birds;
}

//FILTER and includes
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => !geese.includes(bird));
}

// With filter and a for loop instead of includes
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => {
    for (let value of geese) {
      if (value === bird) {
        return false;
      }
    }
    return true;
  });
}

test(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ]),
  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
);

test(
  gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
  ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
);

test(
  gooseFilter([
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ]),
  []
);
