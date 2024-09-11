import express from "express";
import {allPostView, onePostView, postView, postDelete, postUpdate} from "../Controllers/Postcontroller.js";
import ensureAuthentication from "../Middlewares/Auth.js";


const Post = express.Router();

Post.post("/postcreate", ensureAuthentication, postView);
Post.get("/postview1", ensureAuthentication, allPostView);
Post.get("/onepost/:id", ensureAuthentication, onePostView);
Post.delete("/postdelete/:id", ensureAuthentication, postDelete);
Post.put("/postupdate/:id", ensureAuthentication, postUpdate);


export default Post;