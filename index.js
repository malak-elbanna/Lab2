const express = require("express");
const pool = require("./db");

const app = express();

app.get("/", (req, res) => {
    res.send("heyyyy");
});

app.use(express.json());

app.post("/books", async (req, res) => {
    try {
        const { title, author, edition } = req.body;
  
        const query = "Insert into book (title, author, edition) values ($1, $2, $3)";
        const values = [title, author, edition];
  
        const result = await pool.query(query, values);
  
        res.json({ message: "Book added", book: result.rows[0] });
    } 
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});
  

app.get("/books", async (req, res) => {
    try {  
        const query = "Select * from book";
  
        const result = await pool.query(query);
  
        res.json({ message: "books retrieved", books: result.rows });
    } 
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});
  
//addBook("48 Laws of Power", "John", 2);
  
app.put("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, edition } = req.body;
        
        const query = "Update book set title=$1, author=$2, edition=$3 where id=$4";
        const values = [title, author, edition, id];
  
        await pool.query(query, values);
  
        res.json({message: "book updated"});
    } 
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
  
        const query = "Delete from book where id=$1";
        const values = [id];
  
        await pool.query(query, values);
        res.json({message: "book deleted"});
    }
    catch (err) {
        console.error("error:", err);
        res.json({ error: err.message });
    }
});

const port = 5000;
app.listen(port, () => {
    console.log('server running');
});

