const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString().split('\n\n'); 
const allElfs = data.map(elf => elf.split('\n'));


let mostCalories = 0;

// Part one
for(let j=0; j < allElfs.length; j++){
  let elf = allElfs[j];
  let caloriesPerElf = 0;
  for (let i = 0; i < elf.length; i++) {
        caloriesPerElf += Number(elf[i]);
    }
  if (caloriesPerElf > mostCalories) {
    mostCalories = caloriesPerElf; 
  };
}

// Part two
const totalPerElf = allElfs.map(elf => {
    let caloriesPerElf = 0; 
    for (let i = 0; i < elf.length; i++) {
        caloriesPerElf += Number(elf[i]);
    } 
    return caloriesPerElf;
});
totalPerElf.sort((a, b) => {
    if (a < b) {
        return -1;
    } 
    if (b > a) {
        return 1;
    }
    return 0;
}
);
console.log(totalPerElf.slice(-3));
const topThree = totalPerElf.slice(-3);
let topThreeTotal = 0;
for (let i = 0; i < topThree.length; i++) {
    topThreeTotal += topThree[i];
}
console.log(topThreeTotal);
