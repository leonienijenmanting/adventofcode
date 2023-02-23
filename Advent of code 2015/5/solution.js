// TEST INPUT

// const fs = require('fs');
// const input = fs.readFileSync('test.txt');
// const data = input.toString();

// USER INPUT

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString();

// PART ONE
const partOne = data.split("\n").filter(
  string => string.split(/[aeiou]/).length > 3 && 
  string.match(/(.)\1/) && 
  !["ab","cd","pq","xy"].some(bad => string.includes(bad))).length;

console.log('part one: ' + partOne);

// PART TWO

