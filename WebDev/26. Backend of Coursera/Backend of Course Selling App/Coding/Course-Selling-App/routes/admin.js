// let express = require('express');
// let router = express.Router();


const { Router } = require("express");

const adminRouter = Router();

const { adminModel } = require("../db");

adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint",
    });
});

adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "Signin endpoint",
    });
});

adminRouter.post("/", function (req, res) {
    res.json({
        message: "Course endpoint",
    });
});

adminRouter.put("/", function (req, res) {
    res.json({
        message: "course endpoint",
    });
});

adminRouter.get("/bulk", function (req, res) {
    res.json({
        message: "bulk endpoint",
    });
});

module.exports = {
    adminRouter: adminRouter,
};
