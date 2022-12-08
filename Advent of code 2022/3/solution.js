const fs = require('fs');
const input = fs.readFileSync('input.txt');
const testinput = fs.readFileSync('test.txt');

// TEST
const test = testinput.toString().split('\n');


// ASSIGNMENT 1
// step 1
const data = input.toString().split('\n'); 

// step 2
const rucksacks = data.map(rucksack => {
    const middle = Math.ceil(rucksack.length / 2);
    const comp1 = rucksack.substring(0, middle); 
    const comp2 = rucksack.substring(middle);
    const compartments = [comp1, comp2];
    return compartments;
});
// console.log(rucksacks);

// step 3
const suppliesPerCompartmentPerRucksack = rucksacks.map(rucksack =>
    rucksack.map(compartment => compartment.split(''))
);
// console.log(suppliesPerCompartmentPerRucksack);

// step 4
const uniqueSuppliesPerRucksack = suppliesPerCompartmentPerRucksack.map(rucksack => {
    const comp1 = rucksack[0];
    const comp2 = rucksack[1];
    const uniqueSupplyIndex = comp1.filter(supply => comp2.includes(supply))[0];
    return uniqueSupplyIndex
});
// console.log(uniqueSuppliesPerRucksack);

// step 5
const priorities = uniqueSuppliesPerRucksack.map(supply => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let priority = alphabet.indexOf(supply) + 1;
    return priority;
});
// console.log(priorities);

// step 6
let totalPriorities = 0;
for (let i = 0; i < priorities.length; i++) {
    totalPriorities += priorities[i];
};
// console.log(totalPriorities);


// ASSIGNMENT 2
const threesomes = [];

for(let i = 0; i < data.length / 3; i++) {
    const threesome = data.slice(i * 3, i * 3 + 3);
    const threesomeOfArrays = threesome.map(rucksack => rucksack.split(''));
    threesomes.push(threesomeOfArrays);

};
console.log(threesomes);


const uniqueSuppliesPerThreesome = threesomes.map(rucksack => {
    const sack1 = rucksack[0];
    const sack2 = rucksack[1];
    const sack3 = rucksack[2];
    const uniqueSupplyIndex = sack1.filter(supply => sack2.includes(supply) && sack3.includes(supply))[0];
    return uniqueSupplyIndex
});

console.log(uniqueSuppliesPerThreesome);

// step 5
const prioritiesThree = uniqueSuppliesPerThreesome.map(supply => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let priority = alphabet.indexOf(supply) + 1;
    return priority;
});
console.log(prioritiesThree);

// step 6
let totalPrioritiesThree = 0;
for (let i = 0; i < prioritiesThree.length; i++) {
    totalPrioritiesThree += prioritiesThree[i];
};
console.log(totalPrioritiesThree);
