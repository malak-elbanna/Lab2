const express = require("express");
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');
const dotenv = require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('mongo connected'))

    const logger = (req, res, next) => {
    console.log(`[${Date.now()}] ${req.method} ${req.originalUrl}`);
    next();
};

app.use(logger);
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/user", user); 

app.get("/", (req, res) => {
    res.send("heyyyy");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log('server running');
});

