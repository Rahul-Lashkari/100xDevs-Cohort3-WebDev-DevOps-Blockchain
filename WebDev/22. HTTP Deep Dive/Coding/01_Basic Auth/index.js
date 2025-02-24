const express = require('express');

const app = express();

app.use(express.json());

const users = [];

/*
[
    {
        username: "Zen",
        password: "xyz@123",
        token: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6" 
    }
]
*/

function generateToken() {

    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";

    for (let i = 0; i < 32; i++) {

        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;
}

app.post("/signup", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    if (users.find(user => user.username === username)) {
        return res.json({
            message: "You are already signed up!"
        });
    } 

    if (username.length < 5) {
        return res.json({
            message: "You need to have at least 5 users to sign up"
        });
    } 

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You have signed up successfully!"
    });
});

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        const token = generateToken();

        foundUser.token = token;

        return res.json({
            token: token,
            message: "You have signed in successfully!",
        });
    } else {
        return res.json({
            message: "Invalid username or password!"
        });
    }
});

app.get("/me", function(req, res) {
    const token = req.headers.token;

    if (!token) {
        return res.json({
            message: "Token is missing!"
        });
    }

    const foundUser = users.find(user => user.token === token);

    if (foundUser) {
        return res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        return res.json({
            message: "Invalid token!"
        });
    }
});

app.listen(3000);
