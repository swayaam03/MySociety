import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // This imports the CSS file you just created

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Enter your details to access the dashboard.</p>
        </div>

        <form onSubmit={loginHandler}>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="admin@society.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <label className="remember-me">
              <input type="checkbox" className="checkbox" />
              Remember me
            </label>
            {/* Replaced <a> with <button> to fix the ESLint warning */}
            <button 
              type="button" 
              className="forgot-password"
              onClick={() => alert("Navigate to forgot password page")}
            >
              Forgot Password?
            </button>
          </div>

          <button className="login-btn">
            Login 
          </button>

        </form>

        <div className="footer-text">
          Don't have an account? Contact Admin
        </div>
      </div>
    </div>
  );
}

export default Login;