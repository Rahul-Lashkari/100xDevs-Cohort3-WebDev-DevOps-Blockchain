const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { UserModel, TodoModel } = require("./db");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:pikachu@cluster0.gy7z2.mongodb.net/todo");

const JWT_SECRET = "charizard";

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        await UserModel.create({
            email: email,
            password: password,
            name: name,
        });
    } catch (error) {
        return res.status(400).json({
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
        password: password,
    });

    if (user) {
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

function auth(req, res, next) {
    const token = req.headers.authorization;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;

        next();
    } else {
        res.status(403).json({
            message: "Invalid Token!",
        });
    }
}

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
