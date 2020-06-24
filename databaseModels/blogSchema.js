const mongoose = require('mongoose');
const Image = require('./imageSchema');


const blogSchema = new mongoose.Schema({
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Image,
    },
    tittle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "Blog default description is here",
    },
    markdown: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    views: {
        type: Number,
        default: 0
    }
});

/*
 if you need to decode file path or get image
 1. make a virtual Function
*/

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;