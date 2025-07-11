const express = require('express');
const {
  getBooks,
  getUserBooks,
  addBookToUser,
  updateBookStatus,
  updateBookRating,
} = require('../controllers/bookController');

const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public route
router.get('/books', getBooks);

// Protected routes for user's personal library
router.get('/mybooks', authMiddleware, getUserBooks);
router.post('/mybooks/:bookId', authMiddleware, addBookToUser);
router.patch('/mybooks/:bookId/status', authMiddleware, updateBookStatus);
router.patch('/mybooks/:bookId/rating', authMiddleware, updateBookRating);

module.exports = router;
