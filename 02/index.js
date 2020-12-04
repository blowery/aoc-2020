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
    let [constraints, character] = policy.split(' ');
    let [min, max] = constraints.split('-').map(Number);

    let occurrances = Array.from(password).filter(c => c === character).length;
    if (occurrances >= min && occurrances <= max) {
        valid++;
    }
});

reader.on("close", () => {
    console.log(valid);
});
