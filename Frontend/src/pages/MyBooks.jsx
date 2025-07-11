import { useEffect, useState } from "react";
import api from "../axios";
import Loading from "../components/Loading";
import MyBookCard from "../components/MyBookCard";

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = () => {
    api.get("/mybooks")
      .then((res) => setMyBooks(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid gap-4">
          {myBooks.map((entry) => (
            <MyBookCard key={entry._id} entry={entry} onChange={fetchBooks} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
