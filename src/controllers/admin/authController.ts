import Admin from "../../models/adminModel";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt";

export const adminLogin = async (req:any, res:any) =>{
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
        console.log(err)
    }
}