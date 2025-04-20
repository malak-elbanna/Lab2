const User = require("../models/user");
const bycrypt = require("bcryptjs");

const profile = async (req, res) => {
    try {
        const userId = req.user.id; 
        const user = await User.findOne({ id: userId });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const update = async (req, res) => {
    try {
        const userId = req.user.id;
        const { username, email, password } = req.body;

        const user = await User.findOne({ id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (password) {
            const hashedPassword = await bycrypt.hash(password, 10);
            user.password = hashedPassword;
        }
        
        if (username) user.username = username;
        if (email) user.email = email;

        await user.save();
        
        res.status(200).json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const updateRole = async (req, res) => {
    try {
        const userId = req.params.id;
        const { role } = req.body;

        const user = await User.findOne({ id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        user.role = role;
        await user.save();
        
        res.status(200).json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const public = async (req, res) => {
    res.status(200).json({ message: "public" });
}

const protected = async (req, res) => {
    res.status(200).json({ message: "protected" });
}

const admin = async (req, res) => {
    res.status(200).json({ message: "admin" });
}

const moderator = async (req, res) => {
    res.status(200).json({ message: "moderator" });
}

module.exports = { profile, update, updateRole, public, protected, admin, moderator };
