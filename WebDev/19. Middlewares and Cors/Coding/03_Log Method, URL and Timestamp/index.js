/*
Create a middleware function that logs the method, URL and timestamp of the request
*/

const express = require("express");

const app = express();

function loggerMiddleware(req, res, next) {
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.protocol}://${req.get('host')}${req.url}`);
    console.log(`Timestamp: ${new Date()}`);

    next();
}

app.use(loggerMiddleware);

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b,
    });
});

app.get("/multiply", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a * b,
    });
});

app.get("/divide", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a / b,
    });
});

app.listen(3000);
