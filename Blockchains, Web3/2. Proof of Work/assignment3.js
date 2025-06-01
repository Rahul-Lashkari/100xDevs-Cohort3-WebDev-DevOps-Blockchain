// Assignment #3
// find a nonce for the following input - 
// pikachu => bulbasaur | Usd 100
// raichu => squirtle | Usd 10

const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `
pikachu => bulbasaur | Usd 100
raichu => squirtle | Usd 10
` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);