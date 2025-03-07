const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { title, author, edition } = req.body;
  
        const query = "Insert into book (title, author, edition) values ($1, $2, $3)";
        const values = [title, author, edition];
  
        const result = await pool.query(query, values);
  
        res.json({ message: "Book added", book: result.rows[0] });
    } 
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});

module.exports = router;