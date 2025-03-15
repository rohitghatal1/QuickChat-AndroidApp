import mongoose, {Document, Schema} from "mongoose";

export interface IAdminInterface {
    name: string,
    number: string;
    password: string;
}

const adminSchema = new Schema<IAdminInterface>(
    {
    name: {type: String},
    number: {type: String, unique: true, required: true},
    password: {type: String, required: true}
    }, {timestamps: true}
);

export default mongoose.model<IAdminInterface>("Admin", adminSchema);