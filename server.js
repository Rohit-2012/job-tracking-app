import 'express-async-errors'
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

// routers
import jobRouter from './routes/job.router.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.json({ message: "data received", data: req.body });
});

app.use('/api/v1/jobs', jobRouter)

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