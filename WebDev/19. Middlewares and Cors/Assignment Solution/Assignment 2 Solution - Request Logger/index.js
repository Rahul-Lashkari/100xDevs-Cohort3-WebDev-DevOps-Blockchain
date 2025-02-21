/*
Assignment #2 - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
*/

const express = require("express");

const app = express();

function requestLogger(req, res, next) {
    /*
    console.log(req.protocol);
    console.log(req.host);
    console.log(req.url);
    console.log(req.originalUrl);
    */
    console.log(req.method);
    console.log(`${req.protocol}://${req.get("host")}${req.url}`);
    console.log(new Date());

    next();
}

app.use(requestLogger);

app.get("*", (req, res) => {
    res.send("Hi there!");
});

app.post("*", (req, res) => {
    res.send("Hello!");
});

app.put("*", (req, res) => {
    res.send("Welcome!");
});

app.delete("*", (req, res) => {
    res.send("Goodbye!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
