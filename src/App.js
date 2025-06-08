// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Dashboard from "./components/Dashboard.js";
import ForgotPassword from "./components/ForgotPassword.js";
import Application from './components/Application.js';
import Details from "./components/Details.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* new */}
        <Route path="/application" element={<Application />} />
         <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
