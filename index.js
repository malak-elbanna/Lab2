const express = require("express");
const { client, blog, Author } = require("./routes/db"); 
const app = express();

const logger = (req, res, next) => {
    console.log(`[${Date.now()}] ${req.method} ${req.originalUrl}`);
    next();
};

app.use(logger);
app.use(express.json());

const auth = require('./routes/middleware/auth');

app.use('/api/blogs', require('./routes/blogs')); 

app.get("/", (req, res) => {
    res.send("heyyyy");
});

app.use('/api/authors', require('./routes/authors'));

const port = 5000;
app.listen(port, () => {
    console.log('server running');
});

