import express from "express";
import {postView} from "../Controllers/Postcontroller.js";


const Post = express.Router();

Post.post("postview", postView);


export default Post;