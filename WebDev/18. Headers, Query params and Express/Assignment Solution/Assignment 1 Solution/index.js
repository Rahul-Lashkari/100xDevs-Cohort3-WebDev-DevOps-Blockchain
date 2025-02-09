/*
## Assignment #1 - Create an HTTP Server
It should have 4 routes

1. http://localhost:3000/sum/1/2
2. http://localhost:3000/subtract/1/2
3. http://localhost:3000/multiply/1/2
4. http://localhost:3000/divide/1/2
*/

const express = require("express");

const app = express();

app.get("/sum/:num1/:num2", (req, res) => {
    const { num1, num2 } = req.params;

    res.send({
        result: parseInt(num1) + parseInt(num2),
    });
});

app.get("/subtract/:num1/:num2", (req, res) => {
    const { num1, num2 } = req.params;

    res.send({
        result: parseInt(num1) - parseInt(num2),
    });
});

app.get("/multiply/:num1/:num2", (req, res) => {
    const { num1, num2 } = req.params;

    res.send({
        result: parseInt(num1) * parseInt(num2),
    });
});

app.get("/divide/:num1/:num2", (req, res) => {
    const { num1, num2 } = req.params;

    res.send({
        result: parseInt(num1) / parseInt(num2),
    });
});

app.listen(3000);
