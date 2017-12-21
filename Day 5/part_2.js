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

        if (offsetArray[currentLocationIndex] >= 3)
            offsetArray[currentLocationIndex]--;
        else
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
`), 'Expected:', 10);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));