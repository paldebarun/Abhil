import express from "express";
import { sendMessage } from "../controllers/sendMessage.js";
import { appoinment } from "../controllers/appointment.js";
import { router as paymentRouter } from "./payment.js";
import {book} from '../controllers/bookingController';

const router = express.Router();

//Send Message Route
router.route("/sendmessage").post(sendMessage);

//Appointment Route
router.route("/appointment").post(appoinment);

router.route('/book').post(book);

//payment route
router.use(paymentRouter);

export default router;
