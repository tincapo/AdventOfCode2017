function processInput(inputStr) {
    let inputLine = inputStr.split('\n')[0];
    let currentDepth = 0;
    let score = 0;
    let isGarbage = false;

    for (let i = 0; i < inputLine.length; i++) {
        if (inputLine[i] === '!') {
            i++;
            continue;
        }

        if (inputLine[i] === '<') {
            isGarbage = true;
            continue;
        }
        if (inputLine[i] === '>') {
            isGarbage = false;
            continue;
        }

        if (isGarbage) continue;

        if (inputLine[i] === '{') {
            currentDepth++;
        }
        if (inputLine[i] === '}') {
            score += currentDepth;
            currentDepth--;
        }
    }

    return score;
}

console.log('Answer:', processInput('{}'), 'Expected:', 1);
console.log('Answer:', processInput('{{{}}}'), 'Expected:', 6);
console.log('Answer:', processInput('{{},{}}'), 'Expected:', 5);
console.log('Answer:', processInput('{{{},{},{{}}}}'), 'Expected:', 16);
console.log('Answer:', processInput('{<a>,<a>,<a>,<a>}'), 'Expected:', 1);
console.log('Answer:', processInput('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 'Expected:', 9);
console.log('Answer:', processInput('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 'Expected:', 9);
console.log('Answer:', processInput('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 'Expected:', 3);
    
let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));