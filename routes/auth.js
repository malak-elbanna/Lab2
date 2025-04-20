const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const rateLimiting = require('express-rate-limit');

const limiter = rateLimiting({
    windowMs: 5 * 60 * 1000, 
    max: 10,
    message: "try again later",
});

router.post('/register', limiter, auth.register);
router.post('/login', limiter, auth.login);

module.exports = router;
