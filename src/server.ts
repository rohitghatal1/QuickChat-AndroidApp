import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import helmet from "helmet"
import connectDB from "./config/db"
import authRoutes from "./routes/authRoutes";
import errorHandler from "./utils/errorHandler"
import userRoutes from "./routes/userRoutes";
import amdinAuth from "./routes/admin/authRoutesAdmin";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(errorHandler)

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes );
app.use("/api/admin", amdinAuth )

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})