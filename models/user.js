const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['regular', 'moderator', 'admin'],
        default: 'regular'
    }
});

module.exports = mongoose.model('User', userSchema);
