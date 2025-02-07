/*
Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

1. What should happen if they try to delete when there are no kidneys?
2. What should happen if they try to make a kidney healthy when all are already healthy?
*/

const express = require("express");

const app = express();

app.use(express.json());

let users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
        ],
    },
];


app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;

    const numberOfKidneys = johnKidneys.length;

    /*
    // create a variable numberOfHealthyKidneys and set it to 0 to store the number of healthy kidneys
    const numberOfHealthyKidneys = 0;

    // loop through the kidneys of the first user in the users array
    for (let i = 0; i < numberOfKidneys; i++) {
        // if the kidney is healthy, increment the numberOfHealthyKidneys variable
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    */

    const numberOfHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    });
});

/**
 * Create a route handler for POST request
 * URL: http://localhost:3000/
 * 
 *  Request Body - Send JSON data in the request body to add a new kidney to the user 
    {
       "isHealthy": true
    }

 * Add a new kidney for the user with the health status provided in the request body
 */
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy: isHealthy,
    });

    res.json({
        message: "Kidney Added Successfully!",
    });
});

/**
 * Create a route handler for PUT request
 * URL: http://localhost:3000/
 *
 * Update all the unhealthy kidney to healthy kidney, if there are no unhealthy kidney then return a 411 status code
 */
app.put("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            // set the healthy value of the kidney to true
            users[0].kidneys[i].healthy = true;
        }

        res.json({
            message: "Kidney Replaced Successfully!",
        });
    } else {
        res.status(411).json({
            message: "You have no unhealthy kidney to replace",
        });
    }
});

/**
 * Create a route handler for DELETE request
 * URL: http://localhost:3000/
 *
 * Remove all the unhealthy kidney, if there are no unhealthy kidney then return a 411 status code
 */
app.delete("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];

        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                });
            }
        }

        users[0].kidneys = newKidneys;

        res.json({
            message: "Unhealthy Kidney Removed Successfully!",
        });
    } else {
        res.status(411).json({
            message: "You have no unhealthy kidney to remove",
        });
    }
});

function isThereAtleastOneUnhealthyKidney() {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            return true;
        }
    }

    return false;
}

app.listen(3000);
