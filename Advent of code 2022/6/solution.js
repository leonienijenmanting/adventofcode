const fs = require('fs');

const uniqueValues = (arr) => arr.filter((value, index, self) => self.indexOf(value) === index);

const getAnswer = (filename, n) => {
    const data = fs.readFileSync(filename, 'utf8');
    for (let i = n; i < data.length; i++) {
        const arrayToTest = data.substring(i - n, i).split('');
    
        const unique = uniqueValues(arrayToTest);
        if (unique.length === n) {
            console.log(unique);
            console.log(i);
            break;
        }
    }
}

// assignment 1
// getAnswer('test1.txt', 4);
// getAnswer('test2.txt', 4);
// getAnswer('test3.txt', 4);
// getAnswer('test4.txt', 4);
// getAnswer('input.txt', 4);


// assignment 2
// getAnswer('test5.txt', 14);
// getAnswer('test6.txt', 14);
// getAnswer('test7.txt', 14);
// getAnswer('test8.txt', 14);
// getAnswer('test9.txt', 14);
getAnswer('input.txt', 14);
