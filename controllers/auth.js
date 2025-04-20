const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const register = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ message: "Enter a valid email plzz"});
        }

        if (!validatePass(password)) {
            return res.status(400).json({ message: "Weak password alerttt"});
        }

        const hashedPassword = await bycrypt.hash(password, 10);
        const newUser = new User({
            id: new mongoose.Types.ObjectId(),
            username,
            email,
            password: hashedPassword,
            role: role || "regular",
        });

        await newUser.save();
        res.status(201).json({ message: "Done. Now login!" });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "error :((" });
    }
}

const validateEmail = async (email) => {
    const emailRejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRejex.test(email)) {
        return false;
    }
    return true;
}

const validatePass = async (password) => {
    const passRejex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passRejex.test(password)) {
        return false;
    }
    return true;
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Create account first"});
        }

        const isMatch = await bycrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "invalid pass" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error :((" });
    }
}

module.exports = {register, login};