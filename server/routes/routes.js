import express from "express";
import { sendMessage } from "../controllers/sendMessage.js";
import { appoinment } from "../controllers/appointment.js";

const router = express.Router();

//Send Message Route
router.route("/sendmessage").post(sendMessage);

//Appointment Route
router.route("/appointment").post(appoinment);

export default router;
