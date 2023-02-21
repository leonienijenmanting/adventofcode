// https://adventofcode.com/2015/day/1

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString();

// PART ONE

let floor = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] === '(') {
    floor++;
  } else if (data[i] === ')') {
    floor--;
  }
}

console.log(floor);

// PART TWO

let basement = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] === '(') {
    basement++;
  } else if (data[i] === ')') {
    basement--;
  }
  if (basement === -1) {
    console.log(i + 1);
  }    
}