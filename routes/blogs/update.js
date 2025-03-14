const express = require('express');
const router = express.Router();
const Blog = require('../mongo'); 
const auth = require('../middleware/auth');

router.put('/:id', auth, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, 
            { new: true });
        
        if (!blog) return res.send('blog not found soryyyy');
        
        res.send(blog);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
