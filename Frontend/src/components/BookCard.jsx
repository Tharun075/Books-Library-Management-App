import api from "../axios";

const BookCard = ({ book, isLoggedIn }) => {
  const handleAdd = async () => {
    if (!isLoggedIn) return alert("Please log in to add books.");
    try {
      await api.post(`/mybooks/${book._id}`);
      alert("Book added to your list!");
    } catch {
      alert("Already added or failed.");
    }
  };

  return (
    <div className="border p-4">
      <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-semibold">{book.title}</h3>
      <p className="text-sm">{book.author}</p>
      <button onClick={handleAdd} className="mt-2 bg-blue-600 text-white px-3 py-1">
        Want to Read
      </button>
    </div>
  );
};

export default BookCard;
