const express = require('express');
const router = express.Router();
const Blog = require('../mongo');
const auth = require('../middleware/auth');

router.delete('/:id', auth, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.send('blog not found soryyyy');

        res.send('blog deleted yayy');
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
