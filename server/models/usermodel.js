import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

export const Admin = mongoose.models.admin || mongoose.model("admin", userSchema);
