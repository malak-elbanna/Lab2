const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        
        if (token === 'ZEWAIL') {
            return next();
        }
    }
    res.json({ error: 'no authorizations' });
};

module.exports = auth;
