import { ContactUsModel } from "../models/ContactUs.js";
import ErrorHandler from "../utils/errorHandler.js";
import { senEmail } from "../utils/sendMail.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return next(new ErrorHandler("Please Entre all Fields", 400));
    }

    await ContactUsModel.create({
      name,
      email,
      subject,
      message,
    });

    await senEmail(email, process.env.EMAIL_USERNAME, subject, message);

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully, We Will Conatct With You Soon",
    });
  } catch (error) {
    next(new ErrorHandler(error, 404));
  }
};
