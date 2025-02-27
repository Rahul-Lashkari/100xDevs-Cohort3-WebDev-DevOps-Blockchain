require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const MONGODB_URL = process.env.MONGODB_URL;

app.use("/api/v1/user", userRouter);

app.use("/api/v1/admin", adminRouter);

app.use("/api/v1/course", courseRouter);

async function main() {
    try {
        await mongoose.connect(MONGODB_URL);

        console.log("Connected to the database");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}

main()
