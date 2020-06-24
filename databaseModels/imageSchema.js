const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageFile: {
        type: Buffer,
        required: true,
    },
    imageType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

imageSchema.virtual('imagePath').get(function(){
    if(this.imageFile === null || this.imageType === null) return;
    return `data:${this.imageType};charset=utf-8;${this.imageFile}`
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;