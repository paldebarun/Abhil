import express from "express";
import { sendMessage } from "../controllers/sendMessage.js";

const router = express.Router();

//Send Message Route
router.route("/sendmessage").post(sendMessage);

export default router;
