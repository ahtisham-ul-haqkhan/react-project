import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import authRouter from './routes/AuthRouter.js';
import Post from './routes/Posts.js';

dotenv.config();

const app = express();
app.use(cors());

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling multipart/form-data (file uploads)
const upload = multer(); // Use default settings; configure as needed
app.use(upload.none()); // This handles `multipart/form-data` but without files

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("Db Connected Successfully");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

app.use("/api", authRouter);
app.use("/api", Post); // Ensure correct route
