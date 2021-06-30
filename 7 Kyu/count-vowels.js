"use strict";
// Please don't delete the 'use strict' line above

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

//MY SOLUTION

//Pretty simple. Didn't need to do anything fancy.

function getCount(str) {
  var vowelsCount = 0;
  //input string
  //output number of vowels

  for (let letter of str) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

//Using regex

/* function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
} */

// I like this one, but the two loops can make it a bit messy.
/* function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
} */

/* Using some HOF - I also like this one. The split will separate the strings by lack of space, so it pretty much loop and puts each letter into an array.
Then it filters based on upper & lower case, so only the vowels go through. Then returns the count of what is left.

 function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 } */
