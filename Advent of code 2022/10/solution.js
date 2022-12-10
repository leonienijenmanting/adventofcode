const { sign } = require('crypto');
const fs = require('fs');

const runForFile = (filename) => {
  const input = fs.readFileSync(filename, 'utf-8');
  const lines = input.split('\n');

  const valuesAtCycle = [1];
  let cycle = 0;

  for (let i = 0; i < lines.length; i++) {
    const [command, param] = lines[i].split(' ');
    console.log(command);

    if (command === 'noop' || command === 'addx') {
      const value = valuesAtCycle[cycle];
      cycle++;
      valuesAtCycle[cycle] = value;
    }
    if (command === 'addx') {
      const value = valuesAtCycle[cycle];
      cycle++;
      valuesAtCycle[cycle] = value + Number(param);
    }
  }

  let signalStrengthSum = 0;
  for (let i = 20; i < valuesAtCycle.length; i += 40) {
    const signalStrength = valuesAtCycle[i-1] * i;
    signalStrengthSum += signalStrength;
  }
  console.log(signalStrengthSum);
};

runForFile('input.txt');
