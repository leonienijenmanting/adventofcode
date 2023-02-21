// TEST INPUT

const fs = require('fs');
const input = fs.readFileSync('test.txt');
const data = input.toString().split('\n');

// USER INPUT

// const fs = require('fs');
// const input = fs.readFileSync('input.txt');
// const data = input.toString().split('\n');

// PART ONE 
const measurements = data.map(lwh => { 
  return lwh.split('x'); })
// console.log('measurements: ' + measurements);

const wrappingPaperPerGift = measurements.map(surface => {
    const surfA = (surface[0]*surface[1]);
    const surfB = (surface[1]*surface[2]);
    const surfC = (surface[2]*surface[0]);
    // console.log('surfA: ' + surfA);
    // console.log('surfB: ' + surfB);
    // console.log('surfC: ' + surfC);
    const totalSurface = 2 * surfA + 2 * surfB + 2 * surfC;
    // console.log('totalSurface: ' + totalSurface);
    const smallestSurface = Math.min(surfA, surfB, surfC);
    // console.log('smallestSurface: ' + smallestSurface);
    return totalSurface + smallestSurface;
} )

const totalWrappingPaperNeeded = wrappingPaperPerGift.reduce((partialSum, a) => partialSum + a, 0);
console.log(totalWrappingPaperNeeded);

// PART TWO

