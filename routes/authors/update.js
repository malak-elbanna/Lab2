const express = require("express");
const { Author } = require("../db"); 
const router = express.Router();

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, bio } = req.body;
        
        const [updated] = await Author.update({ name, bio }, { where: { id } });
        
        if (updated === 0) return res.json({ message: "author missing try another? :''" });
  
        res.json({ message: "author updated" });
    } 
    catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;