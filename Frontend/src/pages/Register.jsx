import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { email, password });
      alert("Registered! You can now log in.");
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input type="email" className="w-full border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" className="w-full border p-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
