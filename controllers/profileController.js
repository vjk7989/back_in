const User = require("../models/User");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { name, mobileNumber } = req.body;

    try {
        const user = await User.findByIdAndUpdate(req.user.id, { name, mobileNumber }, { new: true });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
