import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginSignup.css";

function SignUp() {

   const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {

    return;
  }
    // Save to localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to Login
    navigate("/");
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="circle">O</span>
          <span className="text">NE <strong>BEHAVIORAL</strong></span>
        </div>
        {/* <Link to="/" className="signup-btn">Login</Link> */}
      </header>

      <div className="login-card">
        <h2>Create your <span className="highlight">account</span></h2>
        <p>Already have an account? <Link to="/">Log in</Link></p>

        <input
  type="text"
  value={name}
   className="input-field"  
  onChange={(e) => setName(e.target.value)}
  placeholder="Full Name"
  required
/>
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
        <button className="login-btn" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
