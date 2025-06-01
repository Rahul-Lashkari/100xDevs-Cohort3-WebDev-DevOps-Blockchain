// Assignment #2
// What if I ask you that the input string should start with 100xdevs ? How would the code change?

const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = "100xdevs" + input.toString();
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

// Output :-
// Input: 100xdevs2274885
// Hash: 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06