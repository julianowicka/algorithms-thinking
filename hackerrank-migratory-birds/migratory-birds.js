'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    const birdCounter = new Array(5).fill(0);
    for (let i = 0; i < arr.length; i++) {
        birdCounter[arr[i] - 1]++;
    }
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < birdCounter.length; i++) {
        if (birdCounter[i] > max) {
            max = birdCounter[i];
            maxIndex = i;
        } else if (birdCounter[i] === max) {
            maxIndex = Math.min(maxIndex, i);
        }
    }
    return maxIndex + 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
