const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header || header !== "Bearer ZEWAIL") {
        return res.json({ error: "Unauthorized access" });
    }

    next();
};

module.exports = authMiddleware;
