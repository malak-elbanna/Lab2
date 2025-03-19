const express = require("express");
const { Task } = require("../db");
const auth = require("../middleware/auth");
const router = express.Router();

router.put("/:id", auth, async (req, res) => {
    try {
        const [updated] = await Task.update(req.body, { 
            where: { id: req.params.id }
        });

        if (!updated) return res.send({ error: "we don't have it" });
        
        const updatedTask = await Task.findByPk(req.params.id);
        res.json(updatedTask);
    } catch (err) {
        console.log(err);
        res.json({ error: "failed" });
    }
});

module.exports = router;