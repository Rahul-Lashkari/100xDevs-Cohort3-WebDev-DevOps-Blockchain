// let express = require('express');
// let router = express.Router();


const { Router } = require("express");

const userRouter = Router();

const { userModel, purchaseModel, courseModel } = require("../db");

const { userMiddleware } = require("../middleware/user");

const { JWT_USER_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

userRouter.post("/signup", async function (req, res) {
    const requireBody = zod.object({
        email: zod.string().email().min(5), 
        password: zod.string().min(5), 
        firstName: zod.string().min(3), 
        lastName: zod.string().min(3), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await userModel.create({
            email,
            password: hashedPassword, 
            firstName,
            lastName,
        });
    } catch (error) {
        return res.status(400).json({
            message: "You are already signup", 
        });
    }

    res.status(201).json({
        message: "Signup Successful!", 
    });
});

userRouter.post("/signin", async function (req, res) {
    const requireBody = zod.object({
        email: zod.string().email(), 
        password: zod.string().min(6), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error, 
        });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email, 
    });

    if (!user) {
        return res.status(403).json({
            message: "Incorrect Credentials!", 
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);

        res.status(200).json({
            token: token, 
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials!", 
        });
    }
});

userRouter.get("/purchases", userMiddleware, async function (req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId: userId, 
    });

    if (!purchases) {
        return res.status(404).json({
            message: "No purchases found", 
        });
    }

    const purchasesCourseIds = purchases.map((purchase) => purchase.courseId);

    const coursesData = await courseModel.find({
        _id: { $in: purchasesCourseIds }, 
    });

    res.status(200).json({
        purchases, 
        coursesData, 
    });
});

module.exports = {
    userRouter: userRouter,
};
