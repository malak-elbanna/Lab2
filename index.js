const express = require("express");
const { client, Task } = require("./routes/db"); 
const app = express();

const logger = (req, res, next) => {
    console.log(`[${Date.now()}] ${req.method} ${req.originalUrl}`);
    next();
};

app.use(logger);
app.use(express.json());

app.use('/api/tasks', require('./routes/tasks')); 

app.get("/", (req, res) => {
    res.send("heyyyy");
});

const port = 5000;
app.listen(port, () => {
    console.log('server running');
});

