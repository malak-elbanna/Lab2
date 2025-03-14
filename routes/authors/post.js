const express = require("express");
const { Author } = require("../db"); 
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, bio } = req.body;
  
        const author = await Author.create({ name, bio });
  
        res.json({ message: "author added", author });
    } 
    catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;