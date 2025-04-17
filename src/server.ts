import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import helmet from "helmet"
import connectDB from "./config/db"
import authRoutes from "./routes/authRoutes";
import errorHandler from "./utils/errorHandler"
import userRoutes from "./routes/userRoutes";
import amdinAuth from "./routes/admin/authRoutesAdmin";
import {Server as SocketIOSever} from "socket.io";
import http from "http";

dotenv.config();

const app = express();
var server = http.createServer(app);

//Socket.IO server initialization
var io = new SocketIOSever(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCh", "DELETE"]
    }
})

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes );
app.use("/api/admin", amdinAuth )

//Global error handler
app.use(errorHandler);

//Socket.IO connection listener
io.on("connection", (socket:any) => {
    console.log("new client connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected: ", socket.id);
    })
})

// start the server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})