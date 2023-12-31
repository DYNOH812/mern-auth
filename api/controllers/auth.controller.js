import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const Signup = async (req, res, next) => {
    const { email, username,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json({message:"user created successfully"});
    } catch (error) {
        next(error);
     }
     };