import bcrypt from 'bcrypt';
import Auth from "../Models/Auth.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await Auth.findOne({ email });
        if (user) {
            return res.status(409).json({ msg: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Auth({ name, email, password: hashedPassword });
        await newUser.save();
        
        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};



export const login = async (req, res) => {
    try {
        const {  email, password } = req.body;
        const user = await Auth.findOne({ email });
        const errorMsg ='Auth Failed or Password is wrong';
        if (!user) {
            return res.status(409).json({ msg: errorMsg });
        }

        const ispassEqual = await bcrypt.compare(password, user.password);
        if(!ispassEqual) {
            return res.status(403).json({msg: errorMsg});
        }
        const jwtToken =  jwt.sign(
            {email: user.email, id: user.id},
            process.env.JWT_SECRET,
            { expiresIn: '24h' } 
        )
        res.status(200).json({ 
            msg: "User Login successfully" ,
            success: true,
            email,
            jwtToken,
            name: user.name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

