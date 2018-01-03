function processInput(inputStr) {
    let bankArray = inputStr.split('\t').map(Number);
    let seenBanks = {};
    let cycle = 0;
    
    while(!seenBanks[bankArray]) {
        seenBanks[bankArray] = cycle++;

        let highestBankValueIndex = bankArray.indexOf(Math.max(...bankArray));
        let spreadValue = bankArray[highestBankValueIndex];

        bankArray[highestBankValueIndex] = 0;
        let nextBankIndex = bankArray[highestBankValueIndex + 1] !== undefined ? highestBankValueIndex + 1 : 0;
        while (spreadValue-- > 0) {
            bankArray[nextBankIndex]++;
            nextBankIndex = bankArray[nextBankIndex + 1] !== undefined ? nextBankIndex + 1 : 0;
        }
    }

    return cycle - seenBanks[bankArray];
}

console.log('Answer:', processInput(`0\t2\t7\t0`), 'Expected:', 4);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));