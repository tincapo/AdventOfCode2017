function processInput(inputStr) {
    let inputLine = inputStr.split('\n')[0];
    let isGarbage = false;
    let removedCount = 0;

    for (let i = 0; i < inputLine.length; i++) {
        if (inputLine[i] === '!') {
            i++;
            continue;
        }

        if (inputLine[i] === '<') {
            if (isGarbage) removedCount++;

            isGarbage = true;
            continue;
        }
        if (inputLine[i] === '>') {
            isGarbage = false;
            continue;
        }

        if (isGarbage) {
            removedCount++;
            continue;
        }
    }

    return removedCount;
}

console.log('Answer:', processInput('<>'), 'Expected:', 0);
console.log('Answer:', processInput('<random characters>'), 'Expected:', 17);
console.log('Answer:', processInput('<<<<>'), 'Expected:', 3);
console.log('Answer:', processInput('<{!>}>'), 'Expected:', 2);
console.log('Answer:', processInput('<!!>'), 'Expected:', 0);
console.log('Answer:', processInput('<!!!>>'), 'Expected:', 0);
console.log('Answer:', processInput('<{o"i!a,<{i<a>'), 'Expected:', 10);
    
let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));