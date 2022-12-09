import _ from 'lodash';
import * as fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf8');
const commands = data.split('$ ').map((command) => command.split('\n'));

const filetree = {};
const currentPath = [];

for (let i = 0; i < commands.length; i++) {
  const lines = commands[i];
  const [commandLine, ...output] = lines;
  const [command, param] = commandLine.split(' ');

  // console.log(command, param);
  if (command === 'cd') {
    if (param === '..') {
      currentPath.pop();
    } else {
      currentPath.push(param);
    }
  }
  if (command === 'ls') {
    const dir = {};
    for (let j = 0; j < output.length; j++) {
      const string = output[j];
      const isDir = string.length > 4 && string.substring(0, 4) === 'dir ';
      if (isDir) {
        dir[string.substring(4)] = {};
      } else {
        const [filesize, filename] = string.split(' ');
        if (filename) {
          dir[filename] = Number(filesize);
        }
      }
    }
    _.set(filetree, currentPath, dir);
  }
}

console.log(JSON.stringify(filetree, null, 2));

const smallDirs = [];
let total = 0;
const dirsThatWillFreeUpEnoughSpace = [];

const getTotalSizeOfDir = (dir, name) => {
  const size = _.map(dir, (value, key) => {
    if (_.isNumber(value)) {
      return value;
    }
    return getTotalSizeOfDir(value, key);
  });

  const sum = _.sum(size);
  // console.log(name, sum);
  if (sum < 100000) {
    smallDirs.push(sum);
  }
  if (sum > 1072511) {
    dirsThatWillFreeUpEnoughSpace.push(sum)
  }
  if (!name) {
    total = sum;
  }
  return sum;
};

getTotalSizeOfDir(filetree);
// assignment 1
console.log(_.sum(smallDirs));

// assignment 2
const totalDiskSpace = 70000000;
const requiredDiskSpace = 30000000;
const freeDiskSpace = totalDiskSpace - total;
const needToFreeUp = requiredDiskSpace - freeDiskSpace;
console.log(needToFreeUp);
console.log(_.sortBy(dirsThatWillFreeUpEnoughSpace)[0]);


