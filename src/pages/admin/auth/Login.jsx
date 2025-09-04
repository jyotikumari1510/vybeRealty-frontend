import React, { useState } from "react";
import api from "../../../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotForm, setForgotForm] = useState({ email: "", newPassword: "" });
  const [forgotMsg, setForgotMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      console.log("logggg: ", res);
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful!");
      navigate("/");
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.message || err.message));
    }
  };

  // Handle forgot password
  const handleForgotChange = (e) => {
    setForgotForm({ ...forgotForm, [e.target.name]: e.target.value });
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/reset-password", forgotForm);
      setForgotMsg("✅ " + res.data.msg);
      setForgotForm({ email: "", newPassword: "" });
      setTimeout(() => setShowForgot(false), 1000);
    } catch (err) {
      setForgotMsg("❌ " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <Link
          type="button"
          className="forgot-btn"
          onClick={() => setShowForgot(true)}
        >
          Forgot Password
        </Link>
        <button type="submit">Login</button>
        <p>
          Don't have an account ? <Link to="/admin/signup">Go to SignUp</Link>
        </p>
      </form>
      <p>{message}</p>

      {/* Forgot Password Modal */}
      {showForgot && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reset Password</h3>
            <form onSubmit={handleForgotSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={forgotForm.email}
                onChange={handleForgotChange}
                required
              />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                value={forgotForm.newPassword}
                onChange={handleForgotChange}
                required
              />
              <button type="submit">Reset Password</button>
              <button type="button" onClick={() => setShowForgot(false)}>
                Cancel
              </button>
            </form>
            <p>{forgotMsg}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
