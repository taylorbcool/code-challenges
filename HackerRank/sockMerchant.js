'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // count number of each color
    // divide count by 2 assign to pairs
    // round number down
    // add all those numbers together
    // return total
    let colorCount = {}
    let pairs = 0
    for (let i = 0; i < ar.length; i++) {
        colorCount[ar[i]] ? colorCount[ar[i]] ++ : colorCount[ar[i]] = 1
    }
    console.log(colorCount)
    for (let [key, value] of Object.entries(colorCount)) {
        let colorPairs = Math.floor(value / 2)
        pairs += colorPairs
    }
    return pairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
