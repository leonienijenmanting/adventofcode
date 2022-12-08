const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString().split('\n'); 
console.log(data);

// Part one
const scores = data.map(score => {
switch(score) {
  case 'A X':
    return 4;
  case 'A Y':
    return 8;
  case 'A Z':  
    return 3;
  case 'B X':
    return 1;
  case 'B Y':
    return 5;
  case 'B Z':
    return 9;
  case 'C X':
    return 7;
  case 'C Y':
    return 2;
  case 'C Z':  
    return 6;    
} 
});
let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
};
console.log(totalScore);

// const test = fs.readFileSync('test.txt');
// const testdata = test.toString().split('\n');
// console.log(testdata);

// Part Two
const newScores = data.map(score => {
    switch(score) {
      case 'A X':
        return 3;
      case 'A Y':
        return 4;
      case 'A Z':  
        return 8;
      case 'B X':
        return 1;
      case 'B Y':
        return 5;
      case 'B Z':
        return 9;
      case 'C X':
        return 2;
      case 'C Y':
        return 6;
      case 'C Z':  
        return 7;    
    } 
    });
    // console.log(newScores);
    let newTotalScore = 0;
    for (let i = 0; i < newScores.length; i++) {
        newTotalScore += newScores[i];
    };
    console.log(newTotalScore);