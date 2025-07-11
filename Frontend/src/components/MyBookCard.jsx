import api from "../axios";
import StarRating from "./StarRating";

const MyBookCard = ({ entry, onChange }) => {
  const updateStatus = async (status) => {
    await api.patch(`/mybooks/${entry.bookId._id}/status`, { status });
    onChange();
  };

  const updateRating = async (rating) => {
    await api.patch(`/mybooks/${entry.bookId._id}/rating`, { rating });
    onChange();
  };

  return (
    <div className="border p-4 flex flex-col sm:flex-row gap-4">
      <img src={entry.bookId.coverImage} alt={entry.bookId.title} className="w-32 h-40 object-cover" />
      <div>
        <h3 className="font-semibold">{entry.bookId.title}</h3>
        <p>{entry.bookId.author}</p>
        <div className="mt-2">
          <label>Status: </label>
          <select value={entry.status} onChange={(e) => updateStatus(e.target.value)} className="border px-2 py-1">
            <option>Want to Read</option>
            <option>Currently Reading</option>
            <option>Read</option>
          </select>
        </div>
        <div className="mt-2">
          <label>Rating: </label>
          <StarRating value={entry.rating} onChange={updateRating} />
        </div>
      </div>
    </div>
  );
};

export default MyBookCard;
