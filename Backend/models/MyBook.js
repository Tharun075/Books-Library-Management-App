const mongoose = require('mongoose');

const myBookSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    status: {
      type: String,
      enum: ['Want to Read', 'Currently Reading', 'Read'],
      default: 'Want to Read',
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },
  },
  { timestamps: true }
);

myBookSchema.index({ userId: 1, bookId: 1 }, { unique: true }); // Prevent duplicate entries

module.exports = mongoose.model('MyBook', myBookSchema);
