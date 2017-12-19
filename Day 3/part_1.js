// Each bottom right corner of the created square is squared natural odd number.
function processInput(inputStr) {
    let inputVal = parseInt(inputStr);
    let edgeLength = Math.ceil(Math.sqrt(inputVal));
    if (edgeLength%2 === 0) edgeLength++;
    let edgeSqrt = edgeLength*edgeLength;
    let maxSteps = edgeLength - 1;
    let minSteps = Math.floor(edgeLength/2);

    let currentNum = edgeSqrt;
    let currentSteps = maxSteps;
    let currentDecrease = true;
    while (currentNum !== inputVal) {
        currentNum--;
        currentDecrease ? currentSteps-- : currentSteps++;
            
        if (currentSteps === minSteps)
            currentDecrease = false;
        if (currentSteps === maxSteps)
            currentDecrease = true;
    }

    return currentSteps;
}

console.log('Answer:', processInput('1'), 'Expected:', 0);
console.log('Answer:', processInput('12'), 'Expected:', 3);
console.log('Answer:', processInput('23'), 'Expected:', 2);
console.log('Answer:', processInput('32'), 'Expected:', 5);
console.log('Answer:', processInput('4096'), 'Expected:', 63);
console.log('Answer:', processInput('1024'), 'Expected:', 31);

console.log('Answer:', processInput('277678'));