const mongoose = require('mongoose')
const { Schema } = mongoose;

const reviewSchema = new Schema({
    Content : {
        type: String,
        maxlength: 500,
        required: true
    },
    rating :{
        type: Number,
        min : 1,
        max : 5,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const reviewSchema = mongoose.model('reviewSchema' , reviewSchema);

module.exports = reviewSchema;
