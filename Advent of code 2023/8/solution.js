// TEST INPUT

const fs = require('fs');
const input = fs.readFileSync('test.txt');
const data = input.toString().split('\n');

// USER INPUT

// const fs = require('fs');
// const input = fs.readFileSync('input.txt');
// const data = input.toString();

// START OF SOLUTION

// Create array with directions (L and R)
const directions = data[0].split('');
// console.log('directions: ' + directions);

// Create arrays with instructions ("AAA = (BBB, CCC)")
const allInstructions = data.splice(2, data.length);
const parsedInstructions = allInstructions.map((instruction) => {
    


    console.log(destination);
})


// console.log('allInstructions: ' + allInstructions);
