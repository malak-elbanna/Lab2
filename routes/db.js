require("dotenv").config(); 
const { Pool } = require("pg");
const sequelize = require('./sequalize');
const { DataTypes } = require('sequelize');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    edition: {
        type: DataTypes.STRING,
        allowNull: false
    },

    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    tableName: 'book',
});

async function main() {
  await pool.connect()
    .then(() => console.log("db Connected"))
  
  await sequelize.sync({ force: true })
    .then(() => console.log("book table created"))
  
}

main();
module.exports = pool;
