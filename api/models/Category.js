const mongoose = require('mongoose');   

let CategorySchema = new mongoose.Schema({
    title: {
        type: String,
    }
});

module.exports = mongoose.model('Category', CategorySchema);