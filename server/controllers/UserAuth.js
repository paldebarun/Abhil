import { Admin } from "../models/usermodel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await Admin.findOne({ email });
        if (user) return res.status(409).json({ message: "Admin already exists" });
        const hashPassword = await bcrypt.hash(password, 10);
        const newAdmin = await Admin.create({ username, email, password: hashPassword });
        // console.log(newAdmin);
        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email });
        if (!user) return res.status(404).json({ message: "Admin not exists" });
        const isCorrectPass = await bcrypt.compare(password, user.password); 
        if (!isCorrectPass) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "10h" });
        res.status(201).json({ user, token, message: "Admin Logged in successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}