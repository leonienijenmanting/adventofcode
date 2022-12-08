const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString().split('\n'); 

const testinput = fs.readFileSync('test.txt');
const test = testinput.toString().split('\n');

// array with array per line, each array has 2 strings (the pairs)
const shortPairs = data.map(pair => {
    return pair.split(',');
});

// console.log(shortPairs);

// convert string to string with all numbers in pair
const fullPairs = shortPairs.map(pair => {
    return pair.map(shortSectionNotation => {
        const startAndEnd = shortSectionNotation.split('-');
        const start = Number(startAndEnd[0]);
        const end = Number(startAndEnd[1]);
        const diff = (end - start) + 1;
        let longSectionNotation = ' ';
        for(let i = 0; i < diff; i++) {
            longSectionNotation += i + start + ' ';
        }
        return longSectionNotation;
    })
});

// console.log(fullPairs);

const comparison = fullPairs.map(pair => {
    const elf1 = pair[0];
    const elf2 = pair[1];
    return elf1.indexOf(elf2) != -1 || elf2.indexOf(elf1) != -1;
})

// console.log(comparison);

const count = comparison.filter(value => value).length;
// console.log(count);

const comparison2 = fullPairs.map(pair => {
    const elf1 = pair[0];
    const elf2 = pair[1];
    const numbersForElf1 = elf1.trim().split(' ');
    const numbersForElf2 = elf2.trim().split(' ');
    // console.log(numbersForElf1); 
    // console.log(numbersForElf2); 
    const intersection = numbersForElf1.filter(value => numbersForElf2.includes(value));
    return intersection.length > 0;
});

console.log(comparison2.filter(value => value).length);