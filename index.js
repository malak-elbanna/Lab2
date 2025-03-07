const express = require("express");
const pool = require("./routes/db");
const app = express();

const logger = (req, res, next) =>{
    console.log(`[${Date.now()}] ${req.method} ${res.url}`);

    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("heyyyy");
});

app.use(express.json());
  
//addBook("48 Laws of Power", "John", 2);
app.use('/api', require('./routes/books'));

const port = 5000;
app.listen(port, () => {
    console.log('server running');
});

