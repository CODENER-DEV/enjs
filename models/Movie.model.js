const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 15,
        max: 255
    },
    cover: {
        type: String,
        required: true,
        min: 10,
        max: 255,
        default: 'assets/images/card-media.png'
    },
    producer: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    director: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    protagonists: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Movie', movieSchema);