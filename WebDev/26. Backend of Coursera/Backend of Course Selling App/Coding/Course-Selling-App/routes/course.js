// let express = require('express');
// let router = express.Router();


const { Router } = require("express");

const { courseModel } = require("../db");

const courseRouter = Router();

courseRouter.get("/preview", function (req, res) {

    res.json({
        message: "Priview endpoint!",
    });
});

courseRouter.get("/courses", function (req, res) {
    res.json({
        message: "Pourses endpoint!",
    });
});

module.exports = {
    courseRouter: courseRouter,
};


/*
function createUserRoutes() {
    app.get("/course/preview", function (req, res) {
        // expecting the user to pay money to purchase a course

        res.json({
            message: "Preview endpoint!",
        });
    });

    app.get("/courses", function (req, res) {
        res.json({
            message: "Courses endpoint!",
        });
    });
}

module.exports = {
    createUserRoutes: createUserRoutes,
};
*/
