// https://adventofcode.com/2015/day/2

// TEST INPUT

// const fs = require('fs');
// const input = fs.readFileSync('test.txt');
// const data = input.toString().split('\n');

// USER INPUT

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString().split('\n');

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
console.log('wrapping paper needed: ' + totalWrappingPaperNeeded);

// PART TWO


const ribbon = measurements.map(side => {
  function compareNumbers(a, b) {
    return a - b;
  }
  // find 2 smallest sides
  side.sort(compareNumbers);
  side.slice(0,2);
  
  // calculate ribbon around 2 smallest sides
  // f.e. 2x3x4 = 2+2+3+3 = 10
  return (side[0]*2)+(side[1]*2);
})

// calculate bow
// f.e. 2x3x4 = 2*3*4 = 24
const bows = measurements.map(bow => {
  return bow[0]*bow[1]*bow[2]
});

// find sum of ribbon and bows
let totalRibbonPerGift = [];
for (let i = 0; i < ribbon.length; i++) {
  totalRibbonPerGift.push(ribbon[i] + bows[i]);
}

const totalRibbon = totalRibbonPerGift.reduce((partialSum, a) => partialSum + a, 0);
console.log('ribbon needed: ' + totalRibbon);
