import express from 'express';
import {  updateUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';


const router = express.Router();

console.log("Ad")
router.post('/update/:id', verifyToken, updateUser)


export default router;