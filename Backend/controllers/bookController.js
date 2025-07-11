const Book = require('../models/Book');
const MyBook = require('../models/MyBook');

// Fetch all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get user books
const getUserBooks = async (req, res) => {
  try {
    const myBooks = await MyBook.find({ userId: req.user.id }).populate('bookId');
    res.status(200).json(myBooks);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Add book to user list
const addBookToUser = async (req, res) => {
  const { bookId } = req.params;
  try {
    const newMyBook = new MyBook({
      userId: req.user.id,
      bookId,
    });

    await newMyBook.save();
    res.status(201).json({ msg: 'Book added to My Books' });
  } catch (err) {
    console.error("❌ addBookToUser error:", err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update book status
const updateBookStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;

  try {
    const myBook = await MyBook.findOne({ userId: req.user.id, bookId });
    if (!myBook) return res.status(404).json({ msg: 'Book not found' });

    myBook.status = status;
    await myBook.save();

    res.status(200).json({ msg: 'Book status updated' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update book rating 
const updateBookRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;

  try {
    const myBook = await MyBook.findOne({ userId: req.user.id, bookId });
    if (!myBook) return res.status(404).json({ msg: 'Book not found' });

    myBook.rating = rating;
    await myBook.save();

    res.status(200).json({ msg: 'Book rating updated' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  getBooks,
  getUserBooks,
  addBookToUser,
  updateBookStatus,
  updateBookRating,
};
