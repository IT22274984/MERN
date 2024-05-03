const bookModel = require('../models/bookmodel');

async function getAllBooks(req, res) {
    try {
        const category = req.query.category || null;
        const books = await bookModel.getAllBooks(category);
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getBookById(req, res) {
    try {
        const id = req.params.id;
        const book = await bookModel.getBookById(id);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
            return;
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function insertBook(req, res) {
    try {
        const data = req.body;
        const result = await bookModel.insertBook(data);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateBook(req, res) {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = await bookModel.updateBook(id, updateData);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteBook(req, res) {
    try {
        const id = req.params.id;
        const result = await bookModel.deleteBook(id);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBook
};
