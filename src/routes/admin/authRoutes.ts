import express from "express";

const router = express.Router();

router.post("/reigster", ()=> {
    console.log("admin register called");
})

router.post("/login", () => {
    console.log("Admin login called");
})

export default router;