const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    price: String,
    subtitle: String,
    releaseYear: Number
})

module.exports = mongoose.model('Book', bookSchema);