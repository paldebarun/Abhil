import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import ErrorMiddleware from "./middlewares/error.js";
import { connectDB } from "./data/database.js";
import router from "./routes/routes.js";
import cors from "cors";

dotenv.config({
  path: "./data/config.env",
});

//creating server
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Connect Database
connectDB();

app.get("/api/v1", (req, res, next) => {
  res.send(`Welcome, This Website is Working on ${process.env.FRONTEND_URL}`);
});

app.use("/api/v1", router);

app.get("/api/v1/getkey", (req, res) => {
  res.status(200).json({ key1: process.env.KEY_ID });
});

export const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.MERCHANT_ID,
});
console.log(instance);

app.use(express.json());
app.use(express.urlencoded({ credentials: true }));

export default app;

app.use(ErrorMiddleware);
