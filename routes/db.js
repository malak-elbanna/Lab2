require("dotenv").config(); 
const { Client } = require("pg");
const sequelize = require('./sequalize');
const { DataTypes } = require('sequelize');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'task',
    timestamps: true 
});

async function main() {
  await client.connect()
    .then(() => console.log("db Connected"))
  
  await sequelize.sync({ alter: true }) 
    .then(() => console.log("task table ok"))
  
}

main();
module.exports = { client, Task }; 
