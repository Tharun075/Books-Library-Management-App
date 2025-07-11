import { useEffect, useState, useContext } from "react";
import api from "../axios";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/books")
      .then((res) => setBooks(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book._id} book={book} isLoggedIn={!!user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
