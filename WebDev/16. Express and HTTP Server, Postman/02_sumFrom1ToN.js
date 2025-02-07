const express = require('express');

const app = express();

function sumFrom1ToN(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

/**
 * create a route for the root URL
 * 
 * Query Parameters: It is a way to send data to the server as key-value pairs. It is appended to the URL after a question mark (?).
 * Example: http://localhost:3000/?n=5
 * Here n is the key and 5 is the value. n is query parameter and 5 is the value of n.
 * Use req.query to access the query parameters in the request object.
 * 
 * If you want to add multiple query parameters, you can separate them with an ampersand (&).
 * Example: http://localhost:3000/?a=5&b=10&c=15
 * Here a, b, and c are query parameters and 5, 10, and 15 are their respective values.
 */
app.get("/", function(req, res) {
    const n = req.query.n;

    const sum = sumFrom1ToN(n);

    res.send("<h1>Your sum is: " + sum + "</h1>");
});

app.listen(3000);