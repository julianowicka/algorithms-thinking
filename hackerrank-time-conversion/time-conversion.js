'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let hours = parseInt(s.substring(0, 2));
    const modifier = s.substring(8);
    const rest = s.substring(2, 8);

    if (modifier === "AM") {
        if (hours === 12) {
            hours = "00";
        } else if (hours < 10) {
            hours = "0" + hours;
        }
    } else {
        if (hours !== 12) {
            hours += 12;
        }
    }

    return hours.toString() + rest;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
