import express from "express";
import ensureAuthentication from "../Middlewares/Auth.js";


const postRouter = express.Router();

postRouter.get('/postView', ensureAuthentication, (req, res) => {
    res.status(200).json([
        {
            name: 'Samsung Mobile',
            password: '555'
        },
        {
            name: 'Mobileww',
            password: 'sssss'
        }
    ]);
});

export default postRouter;