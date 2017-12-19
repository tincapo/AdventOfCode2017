function processInput(inputStr) {
    let lines = inputStr.split('\n');
    let validCount = 0;
    
    lines.forEach(line => {
        if (!line)
            return;

        let words = line.split(' ');
        let wordObj = {};
        let validPass = true;

        for (let word of words) {
            let wordOrdered = word.split('').sort().join('');

            if (wordObj[wordOrdered]) {
                validPass = false;
                break;
            }
            else {
                wordObj[wordOrdered] = true;
            }
        }

        if (validPass)
            validCount++;
    });

    return validCount;
}

console.log('Answer:', processInput('abcde fghij'), 'Expected:', 1);
console.log('Answer:', processInput('abcde xyz ecdab'), 'Expected:', 0);
console.log('Answer:', processInput('a ab abc abd abf abj'), 'Expected:', 1);
console.log('Answer:', processInput('iiii oiii ooii oooi oooo'), 'Expected:', 1);
console.log('Answer:', processInput('oiii ioii iioi iiio'), 'Expected:', 0);
console.log('Answer:', processInput(
`oiii ioii iioi iiio
a ab abc abd abf abj
`), 'Expected:', 1);


let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));