import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css"; // Import the CSS file

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [societyId, setSocietyId] = useState("");

  const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        phone,
        password,
        societyId
      }
    );

    // ✅ STORE TOKEN
    localStorage.setItem("token", response.data.token);

    alert("Registered & Logged in Successfully");

    // ✅ REDIRECT TO DASHBOARD
    navigate("/dashboard");

  } catch (err) {
    console.error("Signup error:", err);
    alert(err.response?.data?.message || "Signup Failed");
  }
};


  return (
    <div className="signup-container">
      <div className="signup-card">
        
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join your society management portal</p>
        </div>

        <form onSubmit={submitHandler}>

          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              className="form-input"
              type="tel"
              placeholder="+91 98765 43210"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Password */}
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

          {/* Society ID */}
          <div className="form-group">
            <label className="form-label">Society ID</label>
            <input
              className="form-input"
              type="text"
              placeholder="SOC-1234"
              onChange={(e) => setSocietyId(e.target.value)}
              required
            />
          </div>

          <button className="signup-btn">
            Register
          </button>

        </form>

        <div className="signup-footer">
  Already have an account?{" "}
  <Link to="/login" className="login-link">
    Login here
  </Link>
</div>


      </div>
    </div>
  );
}

export default Signup;