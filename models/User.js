const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    mobileNumber: { type: String },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
