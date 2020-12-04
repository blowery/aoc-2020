const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: null,
    console: false
});

const numbers = [];
reader.on('line', (line) => {
    const n = +line;
    numbers.push(+line);
});

reader.on('close', () => {
    let i, j, a, b;
    for (i = 0; i < numbers.length; i++) {
        a = numbers[i];
        for (j = i; j < numbers.length; j++) {
            b = numbers[j];
            if (a + b === 2020) {
                console.log(a * b);
                return;
            }
        }
    }
});