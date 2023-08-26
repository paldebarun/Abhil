import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    minLength: [3, "Name Length Must be Atleast 3 Character"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
  phone: {
    type: Number,
    required: [true, "Please Enter Your Phone Number"],
    minLength: [10, "Please Enter Correct Phone Number"],
  },
  service: {
    type: String,
    required: [true, "Please Select Service"],
  },
  date: {
    type: Date,
    required: [true, "Please Select Appoinment Date"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const AppoinmentModel = mongoose.model("Appointment", schema);
