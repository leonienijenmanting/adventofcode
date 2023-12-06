// TEST INPUT

const fs = require('fs');
const input = fs.readFileSync('test.txt');
const data = input.toString().split('\n');

// USER INPUT

// const fs = require('fs');
// const input = fs.readFileSync('input.txt');
// const data = input.toString().split('\n');

// START OF SOLUTION

const getFirstDigit = (game) => {
    const index = game.search(/\d/);
    return Number(game[index]);
  }

const games = data.map((game) => {
  const result = {
      id: getFirstDigit(game),
      red: 0,
      green: 0,
      blue: 0
  };
  
  const [, allRounds] = game.split(': ');
  const rounds = allRounds.split('; ');
  console.log(rounds);

  return result;
});

// Bag contains: 12 red, 13 green, 14 blue