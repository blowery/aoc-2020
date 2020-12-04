const fs = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
  output: null,
  console: false,
});

let valid = 0;
reader.on("line", (line) => {
    let [policy, password] = line.split(':');
    let [indexes, character] = policy.split(' ');
    let [first, second] = indexes.split('-').map(Number).map(index => index - 1);
    console.log(first, second, character)

    password = password.trim();
    const a = password.charAt(first) === character;
    const b = password.charAt(second) === character;
    if (a || b) {
        console.log(a, b, password);
        if (a && b) {
            return;
        }
        valid++;
    }
});

reader.on("close", () => {
    console.log(valid);
});
