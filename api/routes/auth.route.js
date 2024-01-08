import express from "express";
import { google, signOut, signin, signup } from "../controllers/auth.controller.js";

const router=express.Router();
// console.log(router,"router")
router.post("/signup", signup)
router.post("/signin", signin)
router.post("/google", google)
router.get("/signout", signOut)
export default router;