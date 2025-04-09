import express from "express";
import { adminLogin, adminRegister } from "../../controllers/admin/authController";

const router = express.Router();

router.post("/reigster", adminRegister);

router.post("/login", adminLogin);

export default router;