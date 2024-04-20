import 'express-async-errors'
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';


// routers
import jobRouter from './routes/job.router.js'
import authRouter from './routes/auth.router.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/v1/jobs', authenticateUser, jobRouter)
app.use('/api/v1/auth', authRouter)

// NOT FOUND
app.use('*', (req, res) => {
  res.status(404).json({msg: 'not found'})
})

// ERROR MIDDLEWARE
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5100

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
} catch (error) {
  console.log(error)
  process.exit(1)
}