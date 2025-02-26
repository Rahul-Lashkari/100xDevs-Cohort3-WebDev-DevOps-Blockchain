const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const { UserModel, TodoModel } = require("./db");

const { auth, JWT_SECRET } = require("./auth");

const app = express();

app.use(express.json());

mongoose.connect("");

app.post("/signup", async function (req, res) {
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(), 
        password: z.string().min(3).max(100), 
        name: z.string().min(3).max(100),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);
    // console.log(hashedPassword);

    try {
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name,
        });
    } catch (error) {
        return res.json({
            message: "User already exists!",
        });
    }

    res.json({
        message: "You are signed up!",
    });
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });

    if (!user) {
        return res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign(
            {
                id: user._id.toString(),
            },
            JWT_SECRET
        );

        res.json({
            token: token,
            message: "You are signed in!",
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
});

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;

    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done,
    });

    res.json({
        message: "Todo created",
    });
});

app.get("/todo", auth, async function (req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId,
    });

    res.json({
        todos,
    });
});

app.listen(3000);
