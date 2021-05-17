"use strict";
// Please don't delete the 'use strict' line above

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//My messy solution
function countSheeps(arrayOfSheep) {
  let count = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] != null || arrayOfSheep[i] != undefined) {
      if (arrayOfSheep[i] == true) {
        count++;
      }
    }
  }
  return count;
}

// This just filters all the booleans
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
