const bookController = require("../controllers/bookController")


const routes = [
    {
        method: 'GET',
        url: '/api/book',
        handler: bookController.getBook
    },
    {
        method: 'GET',
        url: '/api/book/:id',
        handler: bookController.getSingleBook
    },
    {
        method: 'POST',
        url: '/api/book',
        handler: bookController.addBook
    },
    {
        method: 'PUT',
        url: '/api/book/:id',
        handler: bookController.updateBook
    },
    {
        method: 'DELETE',
        url: '/api/book/:id',
        handler: bookController.deleteBook
    },

]

module.exports = routes