/*
Assignment #3 - Create a middleware that counts total number of requests sent to a server. 
Also create an endpoint that exposes it
*/


const express = require('express');

const app = express();

let requestCount = 0;

function countRequests(req, res, next) {
    requestCount++;

    next();
}

app.use(countRequests);

app.get('/requestCount', (req, res) => {
    res.send({
        totalRequests: requestCount
    });
});

app.get('*', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

