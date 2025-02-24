const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const users = [];

const JWT_SECRET = "pikachu";

function logger (req, res, next) {
    console.log(`${req.method} request came`);
    
    next();
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find((user) => user.username === username)) {
        return res.json({
            message: "You are already signed up!",
        });
    }

    if (username.length < 5) {
        return res.json({
            message: "You need to have at least 5 users to sign up",
        });
    }

    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "You are signed up successfully!",
    });
});

app.post("/signin", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign(
            {
                username, 
            },
            JWT_SECRET
        );

        return res.json({
            message: "You have signed in successfully!",
            token: token,
        });
    } else {
        return res.json({
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
        return res.json({
            message: "Invalid token!",
        });
    }
}

app.get("/me", logger, auth, function (req, res) {
    const currentUser = req.username;

    const foundUser = users.find((user) => user.username === currentUser);

    if (foundUser) {
        return res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        return res.json({
            message: "User not found!",
        });
    }
});

app.listen(3000);
