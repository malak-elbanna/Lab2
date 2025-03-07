const express = require("express");
const pool = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
    try {  
        const query = "Select * from book";
  
        const result = await pool.query(query);
  
        res.json({ message: "books retrieved", books: result.rows });
    } 
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});

module.exports = router;