const fs = require('fs');

const runForFile = (filename) => {
  const input = fs.readFileSync(filename, 'utf-8');
  const lines = input.split('\n');

  const valuesAtCycle = [1];
  let cycle = 0;

  for (let i = 0; i < lines.length; i++) {
    const [command, param] = lines[i].split(' ');

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

  // assignment 1
  let signalStrengthSum = 0;
  for (let i = 20; i < valuesAtCycle.length; i += 40) {
    const signalStrength = valuesAtCycle[i-1] * i;
    signalStrengthSum += signalStrength;
  }
  console.log('\nAssignment 1:');
  console.log(signalStrengthSum);

  // assignment 2
  console.log('\nAssignment 2:\n');
  for (let i = 0; i < valuesAtCycle.length - 1; i += 40) {
    let line = '';
    for (let j = 0; j < 40; j ++) {
      const valueAtCycle = valuesAtCycle[i+j];
      if (valueAtCycle >= j - 1 && valueAtCycle <= j + 1) {
        line += '#';
      } else {
        line += ' '
      }
    }
    console.log(line);
  }
  console.log('\n');
};

runForFile('input.txt');
