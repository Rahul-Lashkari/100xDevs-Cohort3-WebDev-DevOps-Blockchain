/**
 * Assignment #2 - Add more endpoints (mark todo as done) for todo-app.
 *      - Optional: Add timestamp at which todo was created/the time it needs to be done
 */


const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

const { UserModel, TodoModel } = require("./db");

const { auth, JWT_SECRET } = require("./auth");

const app = express();

app.use(express.json());

mongoose.connect("");

app.post("/signup", async function (req, res) {
    const requireBody = zod.object({
        email: zod.string().min(3).max(100).email(), 
        password: zod.string().min(5).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        name: zod.string().min(3).max(100), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    const { email, password, name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        await UserModel.create({ email, password: hashedPassword, name });
    } catch (error) {
        return res.json({ message: "User already exists!" });
    }

    res.json({ message: "You are signed up!" });
});

app.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(403).json({ message: "Invalid Credentials!" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

        res.json({ token, message: "You are signed in!" });
    } else {
        res.status(403).json({ message: "Invalid Credentials!" });
    }
});

app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;

    const { title, done, deadline } = req.body;

    await TodoModel.create({
        userId,
        title,
        done: done || false,
        deadline,
    });

    res.json({ message: "Todo created" });
});

app.get("/todo", auth, async function (req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({ userId });

    if (!todos) {
        return res.json({ message: "No todos found" });
    }

    res.json({ todos });
});

app.put("/todo/:id", auth, async function (req, res) {
    const userId = req.userId;

    const todoId = req.params.id;

    const { title, done } = req.body;

    const todo = await TodoModel.findOne({ _id: todoId, userId });

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todo.title = title || todo.title;
    todo.done = (done !== undefined) ? done : todo.done;

    await todo.save();

    res.json({ message: "Todo updated" });
});

app.delete("/todo/:id", auth, async function (req, res) {
    const userId = req.userId;

    const todoId = req.params.id;

    const todo = await TodoModel.findOne({ _id: todoId, userId });

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    await TodoModel.deleteOne({ _id: todoId, userId });

    res.json({ message: "Todo deleted" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

