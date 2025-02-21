/**
 * Assignment #5 - Write an HTML file, that hits the backend server using `fetch` API
 * 
 * Use the following command to run this file
 *  $ cd public
 *  $ npx serve
 *
 * npx server command is used to serve a folder over http server
 */

const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    console.log(a, b);

    res.json({
        ans: a + b,
    });
});

app.listen(3001);
