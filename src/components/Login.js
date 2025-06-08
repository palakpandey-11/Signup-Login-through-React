import React, { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import "./LoginSignup.css";
// import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
     if (!email || !password) {
    return;
  }
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setErrorMsg("Wrong email or password");
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="circle">O</span>
          <span className="text">NE <strong>BEHAVIORAL</strong></span>
        </div>
        {/* <Link to="/signup" className="signup-btn">Sign up</Link> */}
      </header>

      <div className="login-card">
        <h2>
          Log in to <br />
          your <span className="highlight">account</span>
        </h2>
        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>

        <input
  type="text"
  value={email}
   className="input-field"  
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  required
/>
        <input
  type="password"
  value={password}
   className="input-field"  
  onChange={(e) => setpassword(e.target.value)}
  placeholder="Password"
  required
/>
        <button className="login-btn" onClick={handleLogin}>
          Log In <span className="arrow">→</span>
        </button>

          {errorMsg && <p style={{ color: "red", fontSize: "12px" }}>{errorMsg}</p>}
       <Link to="/forgot-password" className="forgot-link">
  Forgot password?
</Link>
        <div className="divider"></div>
        <button className="google-btn">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240301160842/Screenshot-2024-03-01-160335.png"
            alt="Google"
            className="google-icon"
          />
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
