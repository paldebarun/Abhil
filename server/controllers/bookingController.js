import {Booking} from '../models/bookingSchema'


export const book=async (req, res) => {
    try {
      const booking = new Booking(req.body);
      await booking.save();
      res.status(201).send({ success: true, data: booking });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
