const express = require("express");
const { Author } = require("../db"); 
const router = express.Router();

router.get("/", async (req, res) => {
    try {  
        const authors = await Author.findAll();
  
        res.json({ message: "authors", authors });
    } 
    catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;