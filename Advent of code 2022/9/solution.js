const fs = require('fs');

const runForFile = (filename) => {
  const input = fs.readFileSync(filename, 'utf-8');
  const commands = input.split('\n');

  let headPosition = [0,0];
  let tailPosition = [0,0];
  const visitedPositionsForTail = [tailPosition];

  const takeStep = (direction) => {
    // update the headPosition
    // when needed
      // update the tailPosition
      // update the visitedPositionsForTail
  };

  // per command
    // determine direction
    // determine number of steps (n)
    // call the takeStep function with the correct direction n times

  // make a new const uniqueVisitedPositionsForTail
    // assign only unique values of visitedPositionsForTail
  // console log the length of uniqueVisitedPositionsForTail
};

runForFile('test.txt');
