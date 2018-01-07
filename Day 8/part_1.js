function processInput(inputStr) {
    let inputLines = inputStr.split('\n');
    let registers = {};

    inputLines.forEach(line => {
        let lineValues = line.split(' ');

        let condRegName = lineValues[4];
        let condRegVal = registers[condRegName] !== undefined ? registers[condRegName] : 0;
        let condResult = eval(condRegVal + lineValues.slice(5).join(''));

        if (condResult) {
            let regName = lineValues[0];
            let regVal = registers[regName] ? registers[regName] : 0;
            let regOp = lineValues[1];
            let modNum = parseInt(lineValues[2]);

            switch (regOp) {
                case 'inc':
                    registers[regName] = regVal + modNum;
                    break;
                case 'dec':
                    registers[regName] = regVal - modNum;
                    break;
            }
        }
    });

    return Math.max(...Object.values(registers));
}

console.log('Answer:', processInput(
`b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`), 'Expected:', 1);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));