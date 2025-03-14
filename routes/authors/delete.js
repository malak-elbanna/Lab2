const express = require("express");
const { Author } = require("../db"); 
const router = express.Router();

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
  
        const result = await Author.destroy({ where: { id } });
        
        if (result === 0) return res.json({ message: "author missing try another? :''" });
        
        res.json({ message: "author deleted" });
    }
    catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;