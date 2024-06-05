import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    username: { type: String, required: true }, 
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});
  
export const Booking = mongoose.model('Booking', bookingSchema);
