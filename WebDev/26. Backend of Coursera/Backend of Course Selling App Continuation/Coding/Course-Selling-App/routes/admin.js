// let express = require('express');
// let router = express.Router();


const { Router } = require("express");

const adminRouter = Router();

const { adminModel, courseModel } = require("../db");

const { adminMiddleware } = require("../middleware/admin");

const { JWT_ADMIN_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

adminRouter.post("/signup", async function (req, res) {
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
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
    } catch (error) {
        return res.status(400).json({
            message: "You are already signup!",
        });
    }

    res.status(201).json({
        message: "Signup successful!",
    });
});

adminRouter.post("/signin", async function (req, res) {
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

    const admin = await adminModel.findOne({
        email: email,
    });

    if (!admin) {
        return res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password); 

    if (passwordMatch) {
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);

        res.status(200).json({
            token: token,
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
});

adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const requireBody = zod.object({
        title: zod.string().min(3), 
        description: zod.string().min(10), 
        imageUrl: zod.string().url(), 
        price: zod.number().positive(), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });

    res.status(201).json({
        message: "Course created!",
        courseId: course._id,
    });
});

adminRouter.put("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const requireBody = zod.object({
        courseId: zod.string().min(5), 
        title: zod.string().min(3).optional(), 
        description: zod.string().min(5).optional(), 
        imageUrl: zod.string().url().min(5).optional(), 
        price: zod.number().positive().optional(), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format", 
            error: parseDataWithSuccess.error, 
        });
    }

    const { courseId, title, description, imageUrl, price } = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId,
    });

    if (!course) {
        return res.status(404).json({
            message: "Course not found!", 
        });
    }

    await courseModel.updateOne(
        {
            _id: courseId,
            creatorId: adminId, 
        },
        { 
            title: title || course.title, 
            description: description || course.description, 
            imageUrl: imageUrl || course.imageUrl, 
            price: price || course.price, 
         } 
    );

    res.status(200).json({
        message: "Course updated!", 
    });
});

adminRouter.delete("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const requireBody = zod.object({
        courseId: zod.string().min(5), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { courseId } = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId,
    });

    if (!course) {
        return res.status(404).json({
            message: "Course not found!",
        });
    }

    await courseModel.deleteOne({
        _id: courseId,
        creatorId: adminId,
    });

    res.status(200).json({
        message: "Course deleted!",
    });
});

adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId: adminId,
    });

    res.status(200).json({
        courses: courses,
    });
});

module.exports = {
    adminRouter: adminRouter,
};