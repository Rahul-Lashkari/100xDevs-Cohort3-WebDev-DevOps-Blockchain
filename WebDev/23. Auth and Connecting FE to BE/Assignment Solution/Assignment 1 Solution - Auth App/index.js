/*
Assignment #1 - Conditionally render the `logout` or the `signin`/ `signup` pages 
based on if the user is already logged in or not
*/

const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const users = [];

const JWT_SECRET = "pikachu";

function logger(req, res, next) {
    console.log(`${req.method} request received`);

    next();
}

/*
app.use(express.static("public"));
*/

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({
            message: "Username and password are required.",
        });
    }

    if (username.length < 5) {
        return res.json({
            message: "Username must have at least 5 characters.",
        });
    }

    if (users.find((user) => user.username === username)) {
        return res.json({
            message: "You are already signed up!",
        });
    }

    users.push({ username, password });

    res.json({
        message: "You have signed up successfully!",
    });
});

app.post("/signin", logger, (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {  
        return res.json({
            message: "Username and password are required.",
        });
    }

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign({ username }, JWT_SECRET);

        res.json({
            token,
            message: "You are signed in successfully!",
        });
    } else {
        res.json({
            message: "Invalid username or password!",
        });
    }
});

function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({
            message: "Token is missing!",
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        req.username = decodedData.username;
        next();
    } catch (error) {
        res.json({
            message: "Invalid token!",
        });
    }
}

app.get("/me", logger, auth, (req, res) => {
    const currentUser = req.username;

    const foundUser = users.find((user) => user.username === currentUser);

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        res.json({
            message: "User not found!",
        });
    }
});

app.listen(3000);
