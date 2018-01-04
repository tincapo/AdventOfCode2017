function processInput(inputStr) {
    let inputLines = inputStr.split('\n');
    let dict = {};

    inputLines.forEach(line => {
        let lineSplit = line.split('->');
        let nodeName = lineSplit[0].split(' ')[0].trim();
        let childNodes = lineSplit[1] ? lineSplit[1].split(',').map(v => v.trim()) : [];
        
        if (dict[nodeName]) {
            dict[nodeName].children = childNodes;
        }
        else {
            dict[nodeName] = { 'parent': '', 'children': childNodes };
        }

        childNodes.forEach(childName => {
            if (dict[childName]) {
                dict[childName].parent = nodeName;
            }
            else {
                dict[childName] = { 'parent': nodeName, 'children': '' }
            }
        });
    });

    for (let n in dict) {
        if(!dict[n].parent)
            return n;
    }
}

console.log('Answer:', processInput(
`pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`), 'Expected:', 'tknk');

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');
console.log('Answer:', processInput(input));