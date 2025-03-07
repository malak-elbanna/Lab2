const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/:id/borrow", async (req, res) => {
    try {
        const id = req.params.id;

        const isAvailable = "select available from book where id=$1";
        const vals = [id];
        const result = await pool.query(isAvailable, vals);
        
        if (result.length === 0) {
            res.json({ message: "Book not found" });
            return;
        }

        if (!result.rows[0].available) {
            res.json({message:"Book already borrowed :(("});
            return;
        }

        const updateStatus = "update book set available=false where id=$1";
        await pool.query(updateStatus, vals);

        res.json({message: "Borrowed sucessfully congratsss"});
    } catch(err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
})

module.exports = router;