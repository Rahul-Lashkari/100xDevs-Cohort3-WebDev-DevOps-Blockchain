const express = require("express");

const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
    requestCount++;

    console.log(`Total Number of Requests = ${requestCount}`);

    /*
    // end the request early by sending a response
    res.json({
        message: "I ended the request early"
    });
    */

    next();
}

/**
 * This way of difiing middleware is called inline middleware, which is used for a single route
 */

function realSumHandler(req, res) {
    console.log("Control reached the real sum handler");

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
}

function realMultiplyHandler(req, res) {
    console.log("Control reached the real multiply handler");

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b,
    });
}

app.get("/sum", requestIncreaser, realSumHandler);

app.get("/multiply", requestIncreaser, realMultiplyHandler);

app.listen(3000);
