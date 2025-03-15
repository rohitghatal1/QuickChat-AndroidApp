import Admin from "../../models/adminModel";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt";

export const adminRegister = async (req:any, res:any) => {
    try{
        const {name, number, password} = req.body;

        const adminExists = await Admin.findOne({number});
        if(adminExists) return res.status(400).json({status: "failed", message: "User Already exist with this number!"});

        const hashedPassword =await bcrypt.hash(password,10);
        const admin = await Admin.create({name: name, number: number, password: hashedPassword});

        res.status(201).json({
            status: "success",
            message: "Admin Created successfully"
        })
    } catch (error){
        res.status(500).json({message: "Server Error"});
    }
}
export const adminLogin = async (req:any, res:any) => {
    try{
        const {number, password} = req.body;
        
        const admin = await Admin.findOne({number});
        if(!admin) return res.status(400).json({status: "failed", message: "Invalid Number"});

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) return res.status(400).json({status: "Failed", message:"Invalid Number"});

        res.json({
            status: "Success",
            message: "Logged In Successfully",
            token : generateToken(admin.id),
        })

    } catch (err:any){
        res.status(500).json({message: "Server Error"});
    }
}