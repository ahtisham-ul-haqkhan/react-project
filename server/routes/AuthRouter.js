import express from 'express';
import { signupValidation , loginValidation} from '../Middlewares/AuthValidation.js';
import {signup, login} from "../Controllers/Authcontroller.js"

const authRouter = express.Router();

authRouter.get('/aaa', (req, res) => {
    res.send('Hello from /aaa');
});

authRouter.post('/signup', signupValidation, signup);
authRouter.post('/login', loginValidation, login);
export default authRouter;
