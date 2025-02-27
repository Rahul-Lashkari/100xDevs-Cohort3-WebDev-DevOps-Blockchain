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

Assignment #1 - Create a .env file and add the PORT and MongoDB URL. Access these values in the index.js file.
*/


const express = require("express");  
const mongoose = require("mongoose"); 
require("dotenv").config(); 

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
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database successfully");

        const port = process.env.PORT || 3000;  
        
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database or start the server", error);
    }
}

main();