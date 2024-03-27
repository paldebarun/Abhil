import { AppoinmentModel } from "../models/appoinment.js";
import ErrorHandler from "../utils/errorHandler.js";

export const appoinment = async (req, res, next) => {
  try {
    const { name, email, phone, service, date } = req.body; 
    if (!name || !email || !phone || !service || !date) {
      return next(new ErrorHandler("Please Entre all Fields", 400));
    }

    const user = await AppoinmentModel.findOne({ email });

    if (user)
      return next(
        new ErrorHandler(
          "You have already filled the Appointment Form, Please wait Conformation will be done Soon"
        )
      );

    await AppoinmentModel.create({
      name,
      email,
      phone,
      service,
      date,
    });

    res.status(200).json({
      success: true,
      message:
        "Appointment has been done Sucessfully, Conformation Will be done Soon",
    });
  } catch (error) {
    next(new ErrorHandler(error, 404));
  }
};
