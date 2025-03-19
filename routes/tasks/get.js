const express = require("express");
const { Task } = require("../db");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.send(tasks);
    } catch (err) {
        res.send({ error: "failed" });
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        
        if (!task) return res.send({ error: "sorry we don't have it" });

        res.send(task);
    } catch (err) {
        res.send({ error: "failed ig?" });
    }
});

module.exports = router;