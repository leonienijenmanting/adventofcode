const fs = require('fs');

// HELPER FUNCTIONS BY STEFAN

const readStackInput = (filepath) => {
  const stackData = fs.readFileSync(filepath, 'utf8');
  const stackLines = stackData.split('\n');

  const generatedStacks = [];

  for (let i = stackLines.length -1; i >= 0; i--) {
    const line = stackLines[i];
    for (let j = 0; j < line.length + 1 / 4; j++) {
      const character = line[j * 4 + 1];
      if (character && character !== ' ') {
        if (!generatedStacks[j]) {
          generatedStacks[j] = [];
        }
        generatedStacks[j].push(character);
      }
    }
  }
  return generatedStacks;
};

const printStacks = (stacks) => {
  for (let i = 0; i < stacks.length; i++) {
    const stack = stacks[i];
    console.log(`stack ${i}: ${stack.join(' ')}`);
  }
};

const readCommands = (filepath) => {
  const commandsData = fs.readFileSync(filepath, 'utf8');
  const commandLines = commandsData.split('\n');
  return commandLines.map(line => {
    const parts = line.split(' ');
    const n = Number(parts[1]);
    const from = Number(parts[3]) - 1;
    const to = Number(parts[5]) - 1;
    return { n, from, to };
  });
}

// END OF HELPER FUNCTIONS BY STEFAN

const moveTopItemFromStackToOtherStack = (stacks, oldStackIndex, newStackIndex) => {
  stacks[newStackIndex].push(stacks[oldStackIndex].pop());
};

const moveNItemsFromStackToOtherStack = (stacks, n, oldStackIndex, newStackIndex) => {
  for (let i = 0; i < n; i++) {
    moveTopItemFromStackToOtherStack(stacks, oldStackIndex, newStackIndex);
  }
};

const moveNItemsFromStackToOtherStackInOrder = (stacks, n, oldStackIndex, newStackIndex) => {
  const subArray = stacks[oldStackIndex].slice(-n);
  stacks[newStackIndex] = [...stacks[newStackIndex], ...subArray];
  stacks[oldStackIndex] = stacks[oldStackIndex].slice(0, -n);
};

const printLastItemOfStacks = (stacks) => {
  let lastItems = '';
  for (let i = 0; i < stacks.length; i++) {
    lastItems += stacks[i].pop();
  }
  console.log('\nThe last item from every stack:');
  console.log(lastItems);
};

const handleStack = (stackInput, commandsInput) => {
  const stacks = readStackInput(stackInput);
  console.log('\n   *** LOADED INITIAL STACKS ***   \n');
  printStacks(stacks);
  console.log('\n   *** END OF INITIAL STACKS ***   \n');

  const commands = readCommands(commandsInput);
  
  for (let i = 0; i < commands.length; i++) {
    // assignment 1
    // moveNItemsFromStackToOtherStack(stacks, commands[i].n, commands[i].from, commands[i].to);
    // assignment 2
    moveNItemsFromStackToOtherStackInOrder(stacks, commands[i].n, commands[i].from, commands[i].to);
  }
  printStacks(stacks);
  printLastItemOfStacks(stacks);
};

handleStack('./initialStacks.txt', './commands.txt');
