/*
Assignment #4 - Create a backend server in node.js, that returns the sum endpoint
*/


const express = require("express");

const app = express();

app.use(express.json());

function validateInput(a, b) {

    if ((!a || !b) || (isNaN(a) || isNaN(b))) {
        return false;
    } 

    return true;
}

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    if (!validateInput(a, b)) {
        res.status(400).send({
            error: "Please provide values for a and b and must be integers",
        });
    }

    res.send({
        result: parseInt(a) + parseInt(b),
    });
});

app.listen(3000);
