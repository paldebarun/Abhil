// import { Admin } from '../models/usermodel.js';
import { Booking } from '../models/bookingSchema.js';

export const getAppointmentsByUser = async (req, res) => {
    const { username } = req.params;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        // Verify the user exists

        // const user = await Admin.findOne({ username });
        // if (!user) {
        //     return res.status(404).json({ error: 'User not found' });
        // }

        // Fetch all appointments for the user
        const appointments = await Booking.find({ username });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};