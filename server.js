import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

// routers
import jobRouter from './routes/job.router.js'



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
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: "Something went wrong" })
})

const PORT = process.env.PORT || 5100

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
