/**
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

/*
// Middleware to enable CORS with options 
app.use(cors(), {
    origin: "http://localhost:5000",
    methods: "GET, POST",
    allowedHeaders: "Content-Type, Authorization",
    hosts: ["localhost:5000", "localhost:3000"],
});
*/

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    console.log(a, b);

    res.json({
        ans: a + b,
    });
});

/**
 * If Both backend and frontend are running on the same server, then we don't need to enable CORS
 */

app.get("/", function (req, res) {

    // send the index.html file as a response
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3001);
