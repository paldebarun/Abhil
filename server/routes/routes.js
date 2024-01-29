import express from "express";
import Razorpay from "razorpay";
import { sendMessage } from "../controllers/sendMessage.js";
import { appoinment } from "../controllers/appointment.js";
import app from "../app.js";
import { router as paymentRouter } from "./payment.js";

const router = express.Router();

//Send Message Route
router.route("/sendmessage").post(sendMessage);

//Appointment Route
router.route("/appointment").post(appoinment);

//payment route
router.use(paymentRouter);

export default router;
