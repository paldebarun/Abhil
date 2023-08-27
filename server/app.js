import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/error.js";
import { connectDB } from "./data/database.js";
import router from "./routes/routes.js";
import cors from "cors";
config({
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

export default app;

app.use(ErrorMiddleware);
