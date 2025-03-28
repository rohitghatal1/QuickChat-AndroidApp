import express from "express";
import User from "../models/userModel";

export const getUsers = async (req:any, res:any) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(err:any){
        res.status(500).json({message: "Server Error", err})
    }
};

export const getUserById = async (req:any, res:any) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json(user);
    } catch (err:any){
        res.status(500).json({message: "Server Error", err})
    }
}