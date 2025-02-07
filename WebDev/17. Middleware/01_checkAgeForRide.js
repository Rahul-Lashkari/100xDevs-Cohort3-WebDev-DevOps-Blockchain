const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;

    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            message: "Sorry!, your age is not enough to ride yet",
        });
    }
}

app.use(isOldEnoughMiddleware);

// create a route for GET request on /files path
// http://localhost:3000/ride1?age=10
app.get("/ride1", function (req, res) {
    res.json({
        message: "You have successfully riden the ride 1",
    });
});

// create a route for GET request on /files path
// http://localhost:3000/ride2?age=20
app.get("/ride2", function (req, res) {
    res.json({
        message: "You have successfully riden the ride 2",
    });
});

app.listen(3000);

/*
const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;

    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            message: "Sorry!, your age is not enough to ride yet",
        });
    }
}

// create a route for GET request on /files path
// http://localhost:3000/ride1?age=10
app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
    res.json({
        message: "You have successfully riden the ride 1",
    });
});

// create a route for GET request on /files path
// http://localhost:3000/ride2?age=20
app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
    res.json({
        message: "You have successfully riden the ride 2",
    });
});

app.listen(3000);
*/

/*
const express = require("express");

const app = express();

function isOldEnough(age) {
    if (age > 14) {
        return true;
    } else {
        return false;
    }
}

// create a route for GET request on /files path
app.get("/ride1", function (req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            message: "You have successfully riden the ride 1",
        });
    } else {
        res.status(411).json({
            message: "Sorry your age is not enough to ride the ride 1",
        });
    }
});

// create a route for GET request on /files path
app.get("/ride2", function (req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            message: "You have successfully riden the ride 2",
        });
    } else {
        res.status(411).json({
            message: "Sorry your age is not enough to ride the ride 2",
        });
    }
});

app.listen(3000);
*/
