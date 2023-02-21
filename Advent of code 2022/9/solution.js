const fs = require('fs');

const getUniqueArraysInsideArray = (arrayOfArrays) => {
  const arrayOfStrings = arrayOfArrays.map(JSON.stringify);
  const uniqueStringValues = arrayOfStrings.filter((value, index, self) => self.indexOf(value) === index)
  return uniqueStringValues.map(JSON.parse);
};

const runForFile = (filename) => {
  const input = fs.readFileSync(filename, 'utf-8');
  const lines = input.split('\n');

  console.log(lines);
  
  // [0] is vertical, [1] is horizontal axis.
  let headPosition = [0,0];
  let tailPosition = [0,0];
  const visitedPositionsForTail = [[...tailPosition]];

  const takeStep = (direction) => {
    if (direction === 'R') {
      headPosition = [headPosition[0],headPosition[1]+1];
      console.log(headPosition);
    }
    if (direction === 'L') {
      headPosition = [headPosition[0],headPosition[1]-1];
      console.log(headPosition);
    }
    if (direction === 'U') {
      headPosition = [headPosition[0]+1,headPosition[1]];
      console.log(headPosition);
    }
    if (direction === 'D') {
      headPosition = [headPosition[0]-1,headPosition[1]];
      console.log(headPosition);
    }
  

    // when needed
      // update the tailPosition
      // update the visitedPositionsForTail
  };
takeStep('D');
  // per command
    // determine direction
    // determine number of steps (n)
    // call the takeStep function with the correct direction n times








    for (let i = 0; i < lines.length; i++) {
      const [direction, n] = lines[i].split(' ');


    }

  const uniqueVisitedPositionsForTail = getUniqueArraysInsideArray(visitedPositionsForTail);

  // console.log the length of uniqueVisitedPositionsForTail
};

runForFile('test.txt');
