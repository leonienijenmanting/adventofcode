// TEST INPUT

const fs = require('fs');
const input = fs.readFileSync('test.txt');
const data = input.toString().split(',');

// USER INPUT

// const fs = require('fs');
// const input = fs.readFileSync('input.txt');
// const data = input.toString().split(',');

// START OF SOLUTION

// let allValues = [];

// for (let str = 0; str < data.length; str++) {
//     let currentValue = 0;
//     const string = data[str].split('');
//     for (let char = 0; char < string.length; char++) {
//          // find hex value of character
//         const ascii = string[char].charCodeAt(0);

//         // update current value
//         currentValue = currentValue + ascii;

//         // current value = current value * 72
//         currentValue = currentValue * 17;


//         // current value = the remainder of dividing itself by 256.
//         currentValue = (currentValue % 256);
//     }
//     // update allValues
//     allValues.push(currentValue);    
// }
// // calculate sum of all values in array    

// const total = allValues.reduce((a, b) => a + b, 0);
// console.log(total);

// PART TWO

// een goede eerste stap is zorgen dat je voor elke step uit de data dit kan uitlezen:

// -label
// -focalLength
// -operation ( - of = )

for (let str = 0; str < data.length; str++) {

        // string zo splitten: ['alles voor de operator', 'operator', 'alles na de operator']



    
}