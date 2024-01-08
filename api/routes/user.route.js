import express from 'express';
import {  deleteUser, updateUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';


const router = express.Router();

console.log("Ad")
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)


export default router;