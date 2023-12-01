// TEST INPUT

// const fs = require('fs');
// const input = fs.readFileSync('test.txt');
// const data = input.toString();

// USER INPUT

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString();

// START OF SOLUTION

const splitData = data.split('\n');

// first digit in string
const getFirstDigit = (str) => {
  const index = str.search(/\d/);

  return Number(str[index]);
}

// last digit in string
const reverseString = (str) => [...str].reverse().join('');


const totalValue = [];
// RESULTS
for (let i = 0; i < splitData.length; i++) {
  const firstDigit = getFirstDigit(splitData[i]);
  const reverseStr = reverseString(splitData[i]);
  const lastDigit = getFirstDigit(reverseStr);

  const joinDigits = [];
  joinDigits.push(firstDigit, lastDigit);
  const oneString = joinDigits.join('');
  const number = Number(oneString);

  totalValue.push(number);

  // console.log("splitdata: " + splitData[i]);
  // console.log("FIRST DIGIT: " + getFirstDigit(splitData[i]));
  // console.log("reverse: " + reverse);
  // console.log("LAST DIGIT: " + getFirstDigit(reverse));
  
}
const total = totalValue.reduce((a, b) => a + b, 0);
  
console.log(total);

// PART TWO
