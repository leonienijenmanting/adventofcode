// https://adventofcode.com/2015/day/3

// TEST INPUT

// const fs = require('fs');
// const input = fs.readFileSync('test.txt');
// const data = input.toString().split('');

// USER INPUT

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString();

// PART ONE

let position = '0.0';
const uniquePositions = [position];

for (let i = 0; i < data.length; i++) {
  const instruction = data[i];
  // convert 0.0 to separate numbers ( x and y )
  // result should be 2 separate strings
  const splitPosition = position.split('.');

  // convert strings to numbers
  const xy = splitPosition.map((j) => parseInt(j));

  // check what the instruction is with if-statement. Could be switch, but don't know yet
  // possible instructions: <^>v
  // apply instruction to correct number (x or y)

  switch (instruction) {
    case '<':
      xy[0] --;   
      break;   
    case '^':
      xy[1] ++;  
      break; 
    case '>':
      xy[0] ++;
      break; 
    case 'v':
      xy[1] --;  
      break; 
  }
  // update position to string composed of x and y with a dot in the middle
  position = xy.join('.');

  // new if statement: if position is not already in unique position, push it in.
  if (uniquePositions.indexOf(position) < 0) {
    uniquePositions.push(position);
  }
}

// console log length of unique positions
console.log(uniquePositions.length);

// PART TWO

let positionSanta = '0.0';
let positionRobo = '0.0';
const uniquePositionsTwo = [positionSanta];

const executeInstruction = (initialPosition, instruction) => {
  const splitPos = initialPosition.split('.');
  const xyArray = splitPos.map((k) => parseInt(k));

  switch (instruction) {
    case '<':
      xyArray[0] --;   
      break;   
    case '^':
      xyArray[1] ++;  
      break; 
    case '>':
      xyArray[0] ++;
      break; 
    case 'v':
      xyArray[1] --;  
      break; 
  }

  return xyArray.join('.');
}

for (let i = 0; i < data.length; i+=2) {
  const instructionSanta = data[i];
  const instructionRobo = data[i+1];
  
  positionSanta = executeInstruction(positionSanta, instructionSanta);
  positionRobo = executeInstruction(positionRobo, instructionRobo);

  if (uniquePositionsTwo.indexOf(positionSanta) < 0) {
    uniquePositionsTwo.push(positionSanta);
  }

  if (uniquePositionsTwo.indexOf(positionRobo) < 0) {
    uniquePositionsTwo.push(positionRobo);
  }
}

console.log(uniquePositionsTwo.length);