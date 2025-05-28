const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)

// output: 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d