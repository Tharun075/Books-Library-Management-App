const StarRating = ({ value, onChange }) => {
  return (
    <div className="inline-flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          className={`cursor-pointer text-xl ${value >= star ? "text-yellow-400" : "text-gray-400"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
