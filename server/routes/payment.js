import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/payment").post(checkout);

router.route("/paymentverification").post(paymentVerification);

/*
//  Generate a payment order.
router.post("/donate", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: `receipt_${Crypto.randomBytes(10).toString("hex")}`,
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + " " + razorpay_payment_id;

    const expectedSign = Crypto.createHmac("sha256", "ikCUXjKuyprZcdxxCRdkRGsL")
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Invalid request" });
  }
});
*/
export { router };
