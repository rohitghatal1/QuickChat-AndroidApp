import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = express.Router();

router.post("/userRegister", registerUser);
router.post("/userLogin", loginUser);

export default router;