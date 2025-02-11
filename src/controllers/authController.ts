import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import { generateToken } from "../utils/jwt";

export const registerUser = async (req:any, res: any) => {
    try{
        const {name, number, username, email, password} = req.body;

        const userExists = await User.findOne({email});
        if(userExists) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, number, username, email, password: hashedPassword});

        res.status(201).json({
            _id: user.id,
            name: user.name,
            number: user.number,
            username: user.username,
            email: user.email,
            token: generateToken(user.id),
        });
    } catch (err:any){
        res.status(500).json({mesage: "Server error"})
    }
};

export const loginUser = async (req: any, res: any) => {
    try{
        const {number, password} = req.body;

        const user = await User.findOne({number});
        if(!user) return res.status(400).json({messgage: "Invalid credentials"});


        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        res.json({
            "message": "logged in successfylly",
            token: generateToken(user.id),
        })
    } catch (err:any) {
        res.status(500).json({message: "Sever error"});
    }
}