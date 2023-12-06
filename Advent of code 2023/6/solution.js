// TEST INPUT

const fs = require('fs');
const input = fs.readFileSync('test.txt');
const data = input.toString().split('\n');;

// USER INPUT

// const fs = require('fs');
// const input = fs.readFileSync('input.txt');
// const data = input.toString().split('\n');;

// START OF SOLUTION

console.log(data);

// Time:      7  15   30
// Distance:  9  40  200

// speed = same nr as used time
// movement = speed * remaining time
// winning options = total time - solution less than distance.