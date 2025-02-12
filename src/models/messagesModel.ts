import mongoose, {Document, Schema} from "mongoose";

export interface IMessageProps{
    senderId: string,
    receiverId: string,
    message: string,
}

const messageSchema = new Schema<IMessageProps>(

)