const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// Middleware to parse the request body as JSON 
// app.use(express.json());

app.use(bodyParser.json());

app.get("/sum", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    });
});

app.listen(3000);