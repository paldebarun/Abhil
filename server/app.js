import express from "express";
import "dotenv/config.js";
import Razorpay from "razorpay";
import ErrorMiddleware from "./middlewares/error.js";
import { connectDB } from "./data/database.js";
import router from "./routes/routes.js";
import UserRoutes from "./routes/user.routes.js"
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
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// app.use(cors());

//Connect Database
connectDB();

app.get("/", (req, res, next) => {
  res.send(`Welcome, This Website is Working on ${process.env.FRONTEND_URL}`);
});
app.get("/api/v1", (req, res, next) => {
  res.send(`Welcome, This Website is Working on ${process.env.FRONTEND_URL}`);
});

app.use("/api/v1", router);
app.use("/api/v1/admin", UserRoutes);

app.get("/api/v1/getkey", (req, res) => {
  res.status(200).json({ key1: process.env.KEY_ID });
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
