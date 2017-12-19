function processInput(inputStr) {
    let lineArray = inputStr.split('\n');
    let lineChecksumArray = [];

    lineArray.forEach(line => {
        if (line.length < 1)
            return;
            
        let lineValueArray = line.split('\t').map(v => parseInt(v));
        let minValue = Math.min(...lineValueArray);
        let maxValue = Math.max(...lineValueArray);
        let lineChecksum = maxValue - minValue;
        lineChecksumArray.push(lineChecksum);
    });

    let checksum = lineChecksumArray.reduce((x, y) => x + y);

    return checksum;
}

console.log('Answer:', processInput(
`5\t1\t9\t5
7\t5\t3
2\t4\t6\t8`), 'Expected:', 18);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));