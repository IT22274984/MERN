const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookcontroller');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.insertBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
