const helpers = require('../helpers.js');

const data = helpers.inputToString('input.txt');
const splitData = data.split('\n');

// Create 2 arrays with numbers from left and right column
const leftArray = [];
const rightArray = [];

for (let i = 0; i < splitData.length; i++) {
  const [left, right] = splitData[i].split('   ');
  leftArray.push(Number(left));
  rightArray.push(Number(right));
}

// Sort arrays from low to high numbers
leftArray.sort((a, b) => a - b);
rightArray.sort((a, b) => a - b);

// Calculate difference and add it to an array
const difference = [];

for (let i = 0; i < leftArray.length; i++) {
  const LeftNumber = leftArray[i];
  const RightNumber = rightArray[i];
  const differenceBetweenNumbers = Math.abs(LeftNumber - RightNumber);
  difference.push(differenceBetweenNumbers);
}

// Calculate sum of differences
const totalDifference = helpers.sumOfNumbersArray(difference);
console.log(totalDifference);

// PART TWO

const multiplied = [];

for (let i = 0; i < leftArray.length; i++) {
  const firstIndex = rightArray.indexOf(leftArray[i]);
  const lastIndex = rightArray.lastIndexOf(leftArray[i]);
  if (firstIndex !== -1) {
    const diff = lastIndex - firstIndex +1;
    multiplied.push(leftArray[i] * diff);
  }
}
const totalMultiplied = helpers.sumOfNumbersArray(multiplied);
console.log(totalMultiplied);