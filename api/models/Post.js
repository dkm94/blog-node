const mongoose = require('mongoose');   

let PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "The title is required."
    },
    title_description: [{
        type: String, 
        required: "The title's description is required."
    }],
    img: {
        type: String,
    },
    content: {
        type: String,
        required: "The content is required."
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    }
});

module.exports = mongoose.model('Post', PostSchema);