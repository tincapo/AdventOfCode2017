function processInput(inputStr) {
    let array = inputStr.split('').map(c => parseInt(c));

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentDigit = array[i];
        let nextDigit = array.length - 1 === i ? array[0] : array[i + 1]; // Needs to wrap if there is no next digit in array.

        if (currentDigit === nextDigit) {
            sum += currentDigit;
        }
    }

    return sum;
}

console.log('Answer:', processInput('1212'), 'Expected:', 6);
console.log('Answer:', processInput('1221'), 'Expected:', 0);
console.log('Answer:', processInput('123425'), 'Expected:', 4);
console.log('Answer:', processInput('123123'), 'Expected:', 12);
console.log('Answer:', processInput('12131415'), 'Expected:', 4);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));