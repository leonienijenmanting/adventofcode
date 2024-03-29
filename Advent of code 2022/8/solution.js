const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');

const testinput = fs.readFileSync('test.txt', 'utf-8');
const testdata = testinput.split('\n');


const grid = data.map(row => {
  return row.split('').map(tree => Number(tree));
});

// check if tree is visible from the east (left) or west (right)
const createResultGridForEastOrWest = (direction) => {
  if (direction !== 'east' && direction !== 'west') {
    throw new Error('Direction should be east or west!');
  }
  const resultgrid = [];
  const isEast = direction === 'east';

  for (let i = 0; i < grid.length; i++) {
    let highestTree = -1;
    resultgrid[i] = [];
    for (
      let j = isEast ? 0 : grid[i].length - 1;
      isEast ? j < grid[i].length : j >= 0;
      isEast ? j++ : j--
    ) {
      tree = grid[i][j];
      resultgrid[i][j] = tree > highestTree;
      if (tree > highestTree) {
        highestTree = tree;
      }
    }
  }

  return resultgrid;
};


// check if tree is visible from the north (top) or south (bottom)
const createResultGridForNorthOrSouth = (direction) => {
  if (direction !== 'north' && direction !== 'south') {
    throw new Error('Direction should be north or south!');
  }
  const resultgrid = grid.map(() => []);
  const isNorth = direction === 'north';

  for (let i = 0; i < grid[0].length; i++) {
    let highestTree = -1;
    for (
      let j = isNorth ? 0 : grid.length - 1;
      isNorth ? j < grid.length : j >= 0;
      isNorth ? j++ : j--
    ) {
      const tree = grid[j][i];
      resultgrid[j][i] = tree > highestTree;
      if (tree > highestTree) {
        highestTree = tree;
      }
    }
  }

  return resultgrid;
};

const resultGridEast = createResultGridForEastOrWest('east');
// console.log('\n   *** GRID EAST ***   \n');
// console.log(resultGridEast);
// console.log('\n   *** END GRID EAST ***   \n');

const resultGridNorth = createResultGridForNorthOrSouth('north');
// console.log('\n   *** GRID NORTH ***   \n');
// console.log(resultGridNorth);
// console.log('\n   *** END GRID NORTH ***   \n');

const resultGridWest = createResultGridForEastOrWest('west');
// console.log('\n   *** GRID WEST ***   \n');
// console.log(resultGridWest);
// console.log('\n   *** END GRID WEST ***   \n');

const resultGridSouth = createResultGridForNorthOrSouth('south');
// console.log('\n   *** GRID SOUTH ***   \n');
// console.log(resultGridSouth);
// console.log('\n   *** END GRID SOUTH ***   \n');

// console.log('\n   *** INITIAL TEST GRID ***   \n');
// console.log(grid);
// console.log('\n   *** END OF TEST GRID ***   \n');

let totalVisibleTrees = 0;
for (let i = 0; i < resultGridNorth[0].length; i++) {
  for (let j = 0; j < resultGridNorth.length; j++) {

    if (resultGridNorth[j][i] || resultGridEast[j][i] || resultGridSouth[j][i] || resultGridWest[j][i]) {
      totalVisibleTrees++;

    }
    // console.log(resultGridNorth[j][i], resultGridEast[j][i], resultGridSouth[j][i], resultGridWest[j][i]);
  }
}
// answer for assignment 1
// console.log(totalVisibleTrees);

// assignment 2
// console.log(grid);

const resultGrid = grid.map(() => []);
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    const treeHeight = grid[i][j];
    
    const visibleTrees = {
      north: 0,
      east: 0,
      south: 0,
      west: 0,
    };
    for (let k = j - 1; k >= 0; k--) {
      const treeHeightToCompare = grid[i][k];
      visibleTrees.east++;
      if (treeHeightToCompare >= treeHeight) {
        break;
      }
    }
    for (let k = j + 1; k < grid[i].length; k++) {
      const treeHeightToCompare = grid[i][k];
      visibleTrees.west++;
      if (treeHeightToCompare >= treeHeight) {
        break;
      }
    }
    for (let k = i - 1; k >= 0; k--) {
      const treeHeightToCompare = grid[k][j];
      visibleTrees.north++;
      if (treeHeightToCompare >= treeHeight) {
        break;
      }
    }
    for (let k = i + 1; k < grid.length; k++) {
      const treeHeightToCompare = grid[k][j];
      visibleTrees.south++;
      if (treeHeightToCompare >= treeHeight) {
        break;
      }
    }
    resultGrid[i][j] = visibleTrees.north * visibleTrees.south * visibleTrees.east * visibleTrees.west;
  }
}

// console.log(resultGrid);

let maximumScore = 0;

for (let i = 0; i < resultGrid.length; i++) {
  for (let j = 0; j < resultGrid[i].length; j++) {
    const treeScore = resultGrid[i][j];
    if (treeScore > maximumScore) {
      maximumScore = treeScore;
    }
  }
}

console.log(maximumScore);
