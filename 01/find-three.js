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
    const len = numbers.length;
    let i, j, k, a, b, c;
    for (i = 0; i < len; i++) {
        a = numbers[i];
        for (j = i+1; j < len; j++) {
            b = numbers[j];
            if (a + b > 2020) {
                continue;
            }
            for (k = j + 1; k < len; k++) {
                c = numbers[k];
                if (a + b + c === 2020) {
                    console.log(a * b * c);
                    return;
                }
            }
        }
    }
});