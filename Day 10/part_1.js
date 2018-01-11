function processInput(inputStr) {
    let inputLines = inputStr.split('\n');
    let lengths = inputLines[0].split(',').map(Number);
    let list = Array.from(Array(5).keys());
    let posIndex = 0;
    let skip = 0;

    lengths.forEach(length => {
        //if (length > list.length)
            
            //throw new Error('Length not allowed.');

        let subList = list.slice(posIndex, posIndex + length);
        if (subList.length !== length) {
            subList.push(...list.slice(0, length - subList.length));
        }

        subList.reverse();

        let updatePosIndex = posIndex;
        subList.forEach(val => {
            if (updatePosIndex > list.length - 1)
                updatePosIndex = 0;
            
            list[updatePosIndex] = val;
            updatePosIndex++;
        });

        let steps = length + skip;
        while (steps--) {
            posIndex++;
            if (posIndex > list.length -1)
                posIndex = 0;
        }
        skip++;
    });

    return list[0] * list[1];
}

console.log('Answer:', processInput('3,4,1,5'), 'Expected:', 12);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));