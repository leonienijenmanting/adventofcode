const fs = require('fs');

const handleFile = (filename) => {
  const input = fs.readFileSync(filename, 'utf-8');
  const lines = input.split('\n');
  console.log(lines);
};

handleFile('test.txt');
