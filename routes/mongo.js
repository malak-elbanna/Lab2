require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log('mongo connected');
}).catch(err => {
    console.error('mongo connection error:', err);
});

const Blog = new mongoose.Schema({
    title: {
        type: String,
        allowNull: false
    },
    author: {
        type: String,
        allowNull: false
    },
    content: {
        type: String,
        allowNull: false
    }
});

const blog = mongoose.model('Blog', Blog);

module.exports = blog;
