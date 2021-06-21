"use strict";
// Please don't delete the 'use strict' line above

/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

//MY SOLUTION
/* Pretty simple. 

1. Start with an empty total to add to later.
2. loop through array of number pairs.
3. Set two variables, x and y, to specific indexes of the number pairs.
4. parseInt then because they are strings.
5. Add conditions and additional assignments.
6. Return one number.
*/

function points(games) {
  let total = 0;

  for (let points of games) {
    let x = parseInt(points[0]);
    let y = parseInt(points[2]);

    if (x > y) {
      total += 3;
    }
    if (x === y) {
      total += 1;
    }
  }
  return total;
}

//One liner! Always cool to see.

/* const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0) */
