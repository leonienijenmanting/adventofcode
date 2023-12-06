// TEST INPUT

// const fs = require('fs');
// const input = fs.readFileSync('test.txt');
// const data = input.toString().split('\n');

// USER INPUT

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString().split('\n');;

// START OF SOLUTION
const arrays = data.map((array) => {
    const [, arrayContent] = array.split(': ');
    const splitOnSpaces = arrayContent.split(' ');
    const filteredArray = splitOnSpaces.filter((str) => str.length > 0);
    const filteredNumbers = filteredArray.map((filter) => {
        const number = Number(filter);
        return number;
        });
    return filteredNumbers;
})

const arrayWithTimes = arrays[0];
const arrayWithDistances = arrays[1];

const arrayWithWinningOptions = [];

for (let i = 0; i < arrayWithTimes.length; i++) {
    let winningOptions = 0;
    
    for (let j = 1; j < arrayWithTimes[i]; j++) {
        const boatDistance = j * (arrayWithTimes[i] - j);
        if(boatDistance > arrayWithDistances[i]) {
            winningOptions++;
        }
    }

    arrayWithWinningOptions.push(winningOptions);
}

const multiplyOptions = arrayWithWinningOptions.reduce((a, b) => a * b, 1);

console.log('answer part one: ' + multiplyOptions);

// PART TWO
const oneArray = data.map((array) => {
    const [, arrayContent] = array.split(': ');
    const splitOnSpaces = arrayContent.split(' ');
    const filteredArray = splitOnSpaces.filter((str) => str.length > 0);
    const filteredNumbers = Number(filteredArray.join(''));
    return filteredNumbers;
})

const time = oneArray[0];
const distance = oneArray[1];

let winningOptionsPartTwo = 0;
    
for (let k = 1; k < oneArray[0]; k++) {
    const boatDistance = k * (oneArray[0] - k);
    if(boatDistance > oneArray[1]) {
        winningOptionsPartTwo++;
    }
}


console.log('time: ' + time);
console.log('distance: ' + distance);
console.log('answer part two: ' + winningOptionsPartTwo);