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
  subject: {
    type: String,
    required: [true, "Please Enter Your Subject"],
    minLength: [4, "Subject Length Must be Atleast 4 Character"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Your Message"],
    minLength: [10, "Message Length Must be Atleast 10 Character"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ContactUsModel = mongoose.model("ContactUs", schema);
