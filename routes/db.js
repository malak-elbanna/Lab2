require("dotenv").config(); 
const { Client } = require("pg");
const sequelize = require('./sequalize');
const blog = require('./mongo'); 
const { DataTypes } = require('sequelize');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const Author = sequelize.define('Author', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'author',
    timestamps: true 
});

async function main() {
  await client.connect()
    .then(() => console.log("db Connected"))
  
  await sequelize.sync({ alter: true }) 
    .then(() => console.log("author table ok"))
  
}

main();
module.exports = { client, blog, Author }; 
