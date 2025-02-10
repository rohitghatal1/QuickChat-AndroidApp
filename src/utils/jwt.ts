import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (id:string) => {
    return jwt.sign({id}, process.env.JWT_SECRET as string, {expiresIn: "90d"});
};
