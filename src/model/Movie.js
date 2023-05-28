const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
    title: String,
    duration: number,
    gender: String,
    language: String,
    cover: String,
    director: String,
    cast: [],
})

module.exports = Movie;