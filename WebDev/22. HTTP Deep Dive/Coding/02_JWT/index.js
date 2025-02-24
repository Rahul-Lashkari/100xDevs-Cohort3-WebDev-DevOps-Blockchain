const express = require("express");

const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const users = [];

const JWT_SECRET = "pikachu";

app.post("/signup", function (req, res) {
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
        message: "You have signed up successfully!",
    });
});

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign(
            {
                username: foundUser.username,
            },
            JWT_SECRET
        );

        return res.json({
            token: token,
            message: "You have signed in successfully!",
        });
    } else {
        return res.json({
            message: "Invalid username or password!",
        });
    }
});

app.get("/me", function (req, res) {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({
            message: "Token is missing!",
        });
    }

    // const decoded = jwt.decode(token);

    const userDetails = jwt.verify(token, JWT_SECRET);

    const foundUser = users.find((user) => user.username === userDetails.username);

    if (foundUser) {
        return res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        return res.json({
            message: "Invalid token!",
        });
    }
});

app.listen(3000);
