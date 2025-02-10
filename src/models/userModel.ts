import mongoose, {Document, Schema} from "mongoose";
import { truncate } from "node:fs/promises";

export interface IUser extends Document{
    name: string;
    number:string;
    username:string;
    email:string;
    password:string;
}

const userSchema = new Schema<IUser>(
    {
        name: {type: String, required:true},
        number: {type: String, required:true, unique:true},
        username: {type: String, required:true},
        email: {type: String, required:true, unique:true},
        password: {type: String, required:true},
    }, {timestamps: true}
);

export default mongoose.model<IUser>("User", userSchema);