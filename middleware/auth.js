const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const User = require("../models/user");

const authMiddleware = async (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        return res.json({ message: "no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ id: decoded.id });
        
        if (!user) {
            return res.json({ message: "we don't have uu" });
        }

        req.user = {
            id: user.id,
            role: user.role
        };
        next();
    } catch (err) {
        return res.json({ message: "invalid token" });
    }
}

module.exports = authMiddleware;
