const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        requires: true,
    },
    description: {
        type: String,
        requires: true,
    },
    createAt: {
        type: String,
        requires: true,
        default: Date.now
    },
    updatedAt: {
        type: String,
        requires: true,
        default: Date.now
    },
})

module.exports = mongoose.model('todoSchema', todoSchema);