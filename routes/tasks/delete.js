const express = require("express");
const { Task } = require("../db");
const auth = require("../middleware/auth");
const router = express.Router();

router.delete("/:id", auth, async (req, res) => {
    try {
        const task = await Task.destroy({ where: { id: req.params.id } });
        
        if (!task) {
            return res.send({ error: "not found ouch ouch" });
        }

        res.send({ message: "task deleted" });
    } catch (err) {
        console.log(err);
        res.send({ error: "failed" });
    }
});

module.exports = router;