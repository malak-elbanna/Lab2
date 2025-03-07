const express = require("express");
const pool = require("../db");
const router = express.Router();

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
  
        const query = "Delete from book where id=$1";
        const values = [id];
  
        await pool.query(query, values);
        res.json({message: "book deleted"});
    }
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});

module.exports = router;