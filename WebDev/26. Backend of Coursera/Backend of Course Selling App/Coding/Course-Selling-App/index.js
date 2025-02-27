/**
Create a course selling app
    - Initialize a new Node.js project
    - Add Express, jsonwebtoken, mongoose to it as a dependency
    - Create index.js
    - Add route skeleton for user login, signup, purchase a course, sees all course, see the purchased course
    - Add routes for admin login, admin signup, create a course, delete a course, add course content.
    - Add middlewares for user and admin auth
    - Add a database (mongodb), use dotenv to store the database connection string
    - Define the schema for User, Admin, Course, Purchase
    - Complete the routes for user login, signup, purchase a course, see course
*/

const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

/*
createUserRoutes();
createCourseRoutes();
*/

async function main() {
    try {
        const connection = await mongoose.connect("");
        console.log("Connected to the database");
    } catch(error) {
         console.log("Failed to connect to the database", error)
    }

    /*
    const connection = await mongoose.connect("");

    if (connection) { 
        console.log("Connected to the database");
    } else { 
        console.log("Failed to connect to the database");
    }
    */
    
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
}

main();
