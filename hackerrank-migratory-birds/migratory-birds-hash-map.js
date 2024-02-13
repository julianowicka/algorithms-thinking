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
    const birdCounts = {};
    let maxCount = 0;
    let minType = Number.MAX_SAFE_INTEGER;

    arr.forEach(type => {
        birdCounts[type] = (birdCounts[type] || 0) + 1;

        if (birdCounts[type] > maxCount) {
            maxCount = birdCounts[type];
            minType = type;
        } else if (birdCounts[type] === maxCount) {
            minType = Math.min(minType, type);
        }
    });

    return minType;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
