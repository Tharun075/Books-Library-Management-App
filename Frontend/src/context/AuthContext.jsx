import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchMe = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
        withCredentials: true,
      });
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchMe, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
