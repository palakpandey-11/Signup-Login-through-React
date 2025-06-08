import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="logo">Job Board</div>
        {/* <div className="tagline">Find your dream job</div> */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Browse Job</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>
            <Link to="/application">Application</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="login-btn2" onClick={() => navigate("/")}>Log In</button>
          {/* <button className="post-job-btn">Post A Job</button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          {/* <h3>4536+ Jobs listed</h3> */}
          <h1>Find your Dream Job</h1>
          <p>We provide online instant cash loans with quick approval that suit your term length</p>
          <button className="upload-btn">Upload Your Resume</button>
        </div>
        {/* <div className="hero-image">
          <img src="https://thumbs.dreamstime.com/b/job-interview-vector-modern-simple-one-line-design-composition-recruiter-candidate-continuous-drawing-two-wome-women-129756155.jpg" alt="hero-illustration" />
        </div> */}
      </header>

      {/* Search Section */}
      <section className="search-section">
        <input type="text" placeholder="Search keyword" />
        <select><option>Location</option></select>
        <select><option>Category</option></select>
        <button className="find-job-btn">Find Job</button>
      </section>
    </div>
  );
}

export default Dashboard;

