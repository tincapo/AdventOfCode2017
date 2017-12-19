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
            if (wordObj[word]) {
                validPass = false;
                break;
            }
            else {
                wordObj[word] = true;
            }
        }

        if (validPass)
            validCount++;
    });

    return validCount;
}

console.log('Answer:', processInput('aa bb cc dd ee'), 'Expected:', 1);
console.log('Answer:', processInput('aa bb cc dd aa'), 'Expected:', 0);
console.log('Answer:', processInput('aa bb cc dd aaa'), 'Expected:', 1);
console.log('Answer:', processInput(
`aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`), 'Expected:', 2);
console.log('Answer:', processInput(
`rvbu czwpdit vmlihg spz lfaxxev zslfuto oog dvoksub
`), 'Expected:', 1);

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));