const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: ["admin", "student", "teacher"],
    password: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('User', userSchema);