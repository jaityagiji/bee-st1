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

module.exports = reviewSchema;