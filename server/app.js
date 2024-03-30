import express from "express";
import "dotenv/config.js";
import Razorpay from "razorpay";
import ErrorMiddleware from "./middlewares/error.js";
import { connectDB } from "./data/database.js";
import router from "./routes/routes.js";
import cors from "cors";

//creating server
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({
  origin: [process.env.FRONTEND_URL, 'https://www.abhilyoungmind.com','https://abhilyoungmind.com/'],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


//Connect Database
connectDB();

app.get("/", (req, res, next) => {
  res.send(`Welcome, This Website is Working on ${process.env.FRONTEND_URL}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
});
app.get("/api/v1", (req, res, next) => {
  res.send(`Welcome, This Website is Working on ${process.env.FRONTEND_URL}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
});

app.use("/api/v1", router);

app.get("/api/v1/getkey", (req, res) => {
  res.status(200).json({ key1: process.env.KEY_ID });
  res.setHeader('Access-Control-Allow-Origin', '*');
});

app.use(ErrorMiddleware);

export const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
  headers: {
    "X-Razorpay-Account": process.env.MARCHENT_ID
  }
});


export default app;
