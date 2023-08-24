import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/error.js";
import { connectDB } from "./data/database.js";

config({
  path: "./data/config.env",
});

//creating server
const app = express();

//Connect Database
connectDB();

app.get("/", (req, res, next) => {
  res.send(`Welcome, This Website is Working on ${process.env.FRONTEND_URL}`);
});

export default app;

app.use(ErrorMiddleware);
