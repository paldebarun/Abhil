import { instance } from "../app.js"; 
import { Payment } from "../models/paymentModel.js";
import crypto from "crypto";

// create payment request
export const checkout = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: Number(amount * 100),
    currency: "INR",
    receipt: `receipt_${crypto.randomBytes(10).toString("hex")}`,
  };
  instance.orders.create(options, (error, order) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: 'server error'
      });
    }
    else {
      res.status(200).json({
        success: true,
        order
      });
    }
  });
};

// verify payment
export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.status(200).json({ success: true, paymentId: razorpay_payment_id });
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
