const authorize = (roles) => {
    return (req, res, next) => {   
        const role = req.user.role;
        if (!roles.includes(role)) {
            return res.json({ message: 'Forbidden' });
        }
    
        next();
    };
}

module.exports = authorize;