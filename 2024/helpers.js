const fs = require('fs');

// Functions
const inputToString = (dataFile) => {
    const input = fs.readFileSync(dataFile);
    return input.toString();;
}

const sumOfNumbersArray = (array) => array.reduce((a, b) => a + b, 0);

// Exports
module.exports = {
    inputToString,
    sumOfNumbersArray,
};