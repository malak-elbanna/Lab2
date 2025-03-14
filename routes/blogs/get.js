const express = require('express');
const router = express.Router();
const Blog = require('../mongo');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
