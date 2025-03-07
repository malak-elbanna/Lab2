const express = require("express");
const pool = require("../db");
const router = express.Router();

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, edition } = req.body;
        
        const query = "Update book set title=$1, author=$2, edition=$3 where id=$4";
        const values = [title, author, edition, id];
  
        await pool.query(query, values);
  
        res.json({message: "book updated"});
    } 
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});

module.exports = router;