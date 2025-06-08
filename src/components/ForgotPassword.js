import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css"; // Use your existing styles

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailVerify = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email) {
      setVerified(true);
      setMessage(""); 
    } else {
      setMessage("Email not found. Please try again or sign up.");
    }
  };

   const handlePasswordReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const updatedUser = {
      ...JSON.parse(localStorage.getItem("user")),
      password: newPassword,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setMessage("Password reset successful! Redirecting to login...");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };


  return (
    <div className="forgot-container">
         <div className="forgot-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="Forgot illustration"
          className="forgot-image"
        />
      </div>
     <div className="forgot-right">
        <div className="box">
      <h2 className="form-title">Forgot Password</h2>
      {!verified ? (
      <form className="form" onSubmit={handleEmailVerify}>
        <input
          type="email"
          placeholder="Enter your registered email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Verify Email</button>
      {message && <p className="message">{message}</p>}
      <p className="redirect-text">
          Remember your password?{" "}
          <span className="link" onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </form>
     ) : (
       <form className="form" onSubmit={handlePasswordReset}>
              <input
                type="password"
                placeholder="Create new password"
                className="input-field"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Reset Password
              </button>
              {message && <p className="message">{message}</p>}
            </form>
          )}
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
