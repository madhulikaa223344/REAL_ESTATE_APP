import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utills/verifyUser.js";


const router = express.Router();

router.post("/create",(req, res,next) => {console.log("befpre");next()},verifyToken,(req, res,next) => {console.log("after");next()}, createListing);

export default router;