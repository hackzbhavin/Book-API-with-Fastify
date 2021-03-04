const Book  = require("../models/Book")

// get all courses
exports.getBook = async (req, reply) => {
    try {
        const books = await Book.find()
        return books
    } catch (error) {
        throw error
    }
}


// get a single course

exports.getSingleBook = async (req, reply) => {
    try {
        const bookId = req.params.id
        const book = await Book.findById(bookId)
        return book
    } catch (error) {
        throw error
    }
}


// add a new course

exports.addBook = async (req, reply) => {
    try {
       const book = new Book(req.body)
       return book.save()
    } catch (error) {
        throw error
    }
}


// update an existing course

exports.updateBook = async (req, reply) => {
    try {
        const bookId = req.params.id
        const book = req.body
        const {...updatedBook} = book
        const update = await Course.findByIdAndUpdate(bookId, updatedBook, {new: true})
        return update
    } catch (error) {
        throw error
    }
}

// delete an existing course

exports.deleteBook = async(req, reply) => {
    try {
        const bookId = req.params.id
        const book = Course.findByIdAndDelete(bookId)
        return book
    } catch (error) {
        throw error
    }
}