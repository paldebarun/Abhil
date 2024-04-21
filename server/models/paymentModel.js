import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
  amount: String,
  pan: String,
  pin: String,
  purpose: String,
  isSuccess: Boolean,
  paymentStatus: String,
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
});

export const Payment = mongoose.model("Payment", paymentSchema);
