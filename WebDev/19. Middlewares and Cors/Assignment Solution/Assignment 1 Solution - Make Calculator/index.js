/*
Assignment #1 - Try converting the calculator assignment to use POST endpoints. 
Check if it works with/without the express.json middleware

1. http://localhost:3000/sum
2. http://localhost:3000/subtract
3. http://localhost:3000/multiply
4. http://localhost:3000/divide

request body:
{
    "a": 10,
    "b": 5
}
*/

const express = require("express");

const app = express();

app.use(express.json()); 

function validateInput(req, res, next) {
    const a = req.body.a;
    const b = req.body.b;

    console.log(isNaN(a), isNaN(b));
    

    if (!a || !b) {
        res.status(400).send({
            error: "Please provide values for a and b",
        });
    } else if (isNaN(a) || isNaN(b)) {
        res.status(400).send({
            error: "Please provide valid numbers for a and b",
        });
    } else {
        next();
    }
}

app.use(validateInput);

app.post("/sum", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a + b,
    });
});

app.post("/subtract", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a - b,
    });
});

app.post("/multiply", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a * b,
    });
});

app.post("/divide", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        result: a / b,
    });
});

app.listen(3000);
