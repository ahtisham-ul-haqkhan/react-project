import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
// import authRouter from "./routes/AuthRouter";
import authRouter from './routes/AuthRouter.js';
import postRouter from './routes/PostRouter.js';
import Post from './routes/Posts.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;  
const URL = process.env.MONGOURL;   

mongoose.connect(URL).then(() => {
    console.log("Db Connected Succesfully");

    app.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    });
})
app.use("/api", authRouter);
app.use("/api", Post);
app.use("/api", postRouter);