const express = require("express");
const dotenv = require('dotenv').config();
const app = express();


const logger = (req, res, next) => {
    console.log(`[${Date.now()}] ${req.method} ${req.originalUrl}`);
    next();
};

app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("heyyyy");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log('server running');
});

