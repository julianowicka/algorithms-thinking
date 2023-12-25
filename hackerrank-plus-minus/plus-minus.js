'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positiveNumbersCount = 0;
    let negativeNumbersCount = 0;
    let zerosNumbersCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        if (currentValue === 0) {
            zerosNumbersCount++;
        } else if (currentValue > 0) {
            positiveNumbersCount++;
        } else if (currentValue < 0) {
            negativeNumbersCount++;
        }
    }

    const positiveNumbersRatio = positiveNumbersCount / arr.length;
    const negativeNumbersRatio = negativeNumbersCount / arr.length;
    const zerosNumbersRatio = zerosNumbersCount / arr.length;

    const positiveNumbersFormatted = positiveNumbersRatio.toFixed(6);
    const negativeNumbersFormatted = negativeNumbersRatio.toFixed(6);
    const zerosNumbersFormatted = zerosNumbersRatio.toFixed(6);

    console.log(positiveNumbersFormatted);
    console.log(negativeNumbersFormatted);
    console.log(zerosNumbersFormatted);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
