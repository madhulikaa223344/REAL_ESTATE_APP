import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utills/verifyUser";


const router=express.Router();

router.post("/create-listing", verifyToken,
createListing)

export default router;