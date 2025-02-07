const express = require('express');

const app = express();

function sumOfTwoNumbers(a, b) {
    const sum = a + b;

    return sum;
}

app.get("/", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = sumOfTwoNumbers(a, b);

    res.send("Sum of " + a + " and " + b + " is: " + sum);
});

app.listen(3000);