const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/:id/return", async (req, res) => {
    try {
        const id = req.params.id;

        const isAvailable = "select available from book where id=$1";
        const vals = [id];
        const result = await pool.query(isAvailable, vals);
        
        if (result.length === 0) {
            res.json({ message: "Book not found" });
            return;
        }

        if (result.rows[0].available) {
            res.json({message:"Book hasn't been borrowed in the first place 😡"});
            return;
        }

        const updateStatus = "update book set available = true where id=$1";
        await pool.query(updateStatus, vals);

        res.json({message: "Retuned sucessfully. thank uuu"});
    } catch(err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
})

module.exports = router;