function processInput(inputStr) {
    let blockArray = inputStr.split('\t').map(Number);
    let initialState = blockArray.join(' ');
    let blockStates = {};
    blockStates[initialState] = 1;
    let cyclesNum = 0;
    let balance = true;

    while (balance) {
        cyclesNum++;

        let largestNumIndex = 0;
        for (let i = 1; i < blockArray.length; i++) {
            if (blockArray[i] > blockArray[largestNumIndex])
                largestNumIndex = i;
        }

        let numToRedistribute = blockArray[largestNumIndex];
        blockArray[largestNumIndex] = 0;
        let indexToBalance = largestNumIndex + 1 >= blockArray.length ? 0 : largestNumIndex + 1;
        while (numToRedistribute > 0) {
            blockArray[indexToBalance]++;
            indexToBalance = indexToBalance + 1 >= blockArray.length ? 0 : indexToBalance + 1;
            numToRedistribute--;
        }

        let currentState = blockArray.join(' ');
        if (blockStates[currentState]) {
            balance = false;
            break;
        }
        blockStates[currentState] = 1;
    }

    return cyclesNum;
}

console.log('Answer:', processInput(`0\t2\t7\t0`), 'Expected:', 5);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));