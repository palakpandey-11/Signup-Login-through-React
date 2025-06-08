import React, { useEffect, useState } from "react";
import './Details.css';
import { useNavigate } from "react-router-dom";

function Details() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(data);
  }, []);

  return (
    <div className="details-container">
      <h2>Submitted Applications</h2>
       <button className="back-button" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </button>
      <table>
        <thead>
          <tr>
            <th>First Name</th><th>Last Name</th><th>Birth Date</th>
            <th>Phone</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.firstName}</td>
              <td>{app.lastName}</td>
              <td>{`${app.birthMonth} ${app.birthDay}, ${app.birthYear}`}</td>
              <td>{app.phone}</td>
              <td>{app.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
