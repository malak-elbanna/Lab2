const express = require('express');
const router = express.Router();
const Blog = require('../mongo');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.send(blog);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
