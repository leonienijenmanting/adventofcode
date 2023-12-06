// TEST INPUT

// const fs = require('fs');
// const input = fs.readFileSync('test.txt');
// const data = input.toString().split('\n');;

// USER INPUT

const fs = require('fs');
const input = fs.readFileSync('input.txt');
const data = input.toString().split('\n');;

// START OF SOLUTION
let totalScore = 0;

const cards = data.map((card) => {
    const [, cardContent] = card.split(': ');
    const arrayWithAllNumbers = cardContent.split(' | ');
    const parsedArrayWithAllNumbers = arrayWithAllNumbers.map((parsed) => {
        const smallStrings = parsed.split(' ');
        const filtered = smallStrings.filter((str) => str.length > 0);
        const filteredNumbers = filtered.map((filter) => {
            const number = Number(filter);
            return number;
        });
        return filteredNumbers;
    });
    const [winningNumbers, myNumbers] = parsedArrayWithAllNumbers;
    let matches = 0;
    let cardScore = 0;
    console.log(winningNumbers, myNumbers);
    for (let i = 0; i < myNumbers.length; i++) {
        if (winningNumbers.includes(myNumbers[i])) {
            matches++;
            cardScore = Math.pow(2, matches - 1);
        } 
    };
    totalScore = totalScore + cardScore

  return totalScore; //points per card
});

console.log(totalScore);