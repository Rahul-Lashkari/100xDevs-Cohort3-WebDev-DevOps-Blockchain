// let express = require('express');
// let router = express.Router();


const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint!",
    });
});

userRouter.post("/signin", function (req, res) {
    res.json({
        message: "Signin endpoint!",
    });
});

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

module.exports = {
    userRouter: userRouter,
};


/*
function createUserRoutes() {
    app.post("/user/signup", function (req, res) {
        res.json({
            message: "Signup endpoint!",
        });
    });

    app.post("/user/signin", function (req, res) {
        res.json({
            message: "Signin endpoint!",
        });
    });

    app.get("/user/purchases", function (req, res) {
        res.json({
            message: "Purchases endpoint!",
        });
    });
}

module.exports = {
    createUserRoutes: createUserRoutes,
};
*/
