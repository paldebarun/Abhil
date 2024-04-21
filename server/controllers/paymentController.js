import { instance } from "../app.js";
import { Payment } from "../models/paymentModel.js";
import crypto from "crypto";

// create payment request
export const checkout = async (req, res) => {
  const { amount, name, phone, address, email, pan, pin, purpose } = req.body;
  // console.log(amount, name, phone, address, email, pan, pin, purpose);
  const newPayment = await Payment.create({ amount, name, phone, address, email, pan, pin, purpose });
  // console.log(newPayment);
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
        order,
        paymentId: newPayment._id,
      });
    }
  });
};

// verify payment
export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body.res;
  const { paymentId } = req.body;
  // console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentId);
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;

  const payment = await Payment.findById(paymentId);
  if (!payment) res.status(404).json({ message: "Payment not found" })

  if (isAuthentic) {
    await Payment.findByIdAndUpdate(paymentId, {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      isSuccess: true,
      paymentStatus: "successful",
    }, {new: true}) 
    res.status(200).json({ success: true, paymentId: razorpay_payment_id });
  } else {
    const update = await Payment.findByIdAndUpdate(paymentId, {
      isSuccess: false,
      paymentStatus: "failed",
    }, {new: true}) 
    res.status(400).json({
      success: false,
    });
  }
};
