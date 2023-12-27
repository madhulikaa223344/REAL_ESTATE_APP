import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router=express.Router();
// console.log(router,"router")
router.post("/signup", signup)
// router.post("/signin", signin)

export default router;