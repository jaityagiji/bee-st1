const mongoose = require('mongoose')
const { Schema } = mongoose;
const {reviewSchema} = require('./reviewSchema')


const movieSchema = new Schema({
    title:{
        type:String,
        maxlength : 255,
        required:true
    },
    description :{
        type: String,
        maxlength : 1000,
        required: true
    },
    genre : {
        type: String,
        required : true
    },
    releaseYear : {
        type : Number,
        min : 1800,
        max : 2023,
        required : true
    },
    reviews : {
        type : [reviewSchema]
    }

});

const movieSchema = mongoose.model('movieSchema' , movieSchema);

module.exports = movieSchema;
