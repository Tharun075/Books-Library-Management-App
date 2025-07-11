import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-200">
          My Library
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-teal-300 transition duration-150">
            Home
          </Link>

          {user ? (
            <>
              <Link to="/mybooks" className="hover:text-teal-300 transition duration-150">
                My Books
              </Link>
              <span className="text-gray-300 hidden sm:inline">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-1 rounded transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-teal-300 transition duration-150">
                Login
              </Link>
              <Link to="/register" className="hover:text-teal-300 transition duration-150">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
