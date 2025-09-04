import React, { useState } from "react";
import api from "../../../utils/axiosInstance";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      console.log("user response: ", res);
      setMessage("✅ Registered successfully!");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="form-container">
      <h2 className="">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account ? <Link to="/admin/">Go to Login</Link>
        </p>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
