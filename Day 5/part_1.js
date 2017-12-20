function processInput(inputStr) {
    let lines = inputStr.split('\n');
    let offsetArray = lines.reduce((arr, val) => {
        if (val != '')
            arr.push(parseInt(val));

        return arr;
    }, []);

    let currentLocationIndex = 0;
    let nextLocationIndex = offsetArray[currentLocationIndex];
    let stepCount = 0;

    while (nextLocationIndex < offsetArray.length || stepCount > Math.pow(2, 32) - 1) {
        nextLocationIndex = currentLocationIndex + offsetArray[currentLocationIndex];

        offsetArray[currentLocationIndex]++;
        stepCount++;
        currentLocationIndex = nextLocationIndex;
    }

    return stepCount;
}

console.log('Answer:', processInput(
`0
3
0
1
-3
`), 'Expected:', 5);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));


/*
// This is my initial recursive solution that throws "Maximum call stack size exceeded".
// The reason is that tail call optimization is not supported very well...
function processInput(inputStr) {
    let lines = inputStr.split('\n');
    let offsetArray = lines.reduce((arr, val) => {
        if (val != '')
            arr.push(parseInt(val));

        return arr;
    }, []);

    let stepCount = makeJump(offsetArray, 0, 0);

    return stepCount;
}

function makeJump(instructionArray, currentLocationIndex, stepCount) {
    let nextLocationIndex = currentLocationIndex + instructionArray[currentLocationIndex];

    instructionArray[currentLocationIndex]++;
    stepCount++;

    if (nextLocationIndex > instructionArray.length - 1) {
        return stepCount;
    }

    return makeJump(instructionArray, nextLocationIndex, stepCount);
}
*/