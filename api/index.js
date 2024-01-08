import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
dotenv.config();


mongoose
  .connect(process.env.MONGO ,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });

  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);


  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });