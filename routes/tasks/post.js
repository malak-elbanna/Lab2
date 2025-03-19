const express = require("express");
const { Task } = require("../db"); 
const auth = require("../middleware/auth"); 
const router = express.Router();

router.post("/", auth, async (req, res) => { 
    try {
        const task = new Task(req.body);
        await task.save();
        res.send(task);
    } 
    catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;