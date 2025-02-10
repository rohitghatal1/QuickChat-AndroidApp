import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOURI as string);
        console.log("mongoDBConnected");
    } catch(err){
        console.error("MongoDb connection Failed:", err);
        process.exit(1);
    }
}

export default connectDB;