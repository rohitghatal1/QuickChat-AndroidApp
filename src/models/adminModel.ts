import mongoose, {Document, Schema} from "mongoose";

export interface IAdminInterface {
    number: string;
    password: string;
}

const adminSchema = new Schema<IAdminInterface>(
    {
    number: {type: String, unique: true, required: true},
    password: {type: String, required: true}
    }, {timestamps: true}
);

export default mongoose.model<IAdminInterface>("Admin", adminSchema);