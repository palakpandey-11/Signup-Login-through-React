import React from 'react';
import './Application.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Application() {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  const applicationData = {
    firstName,
    lastName,
    birthMonth,
    birthDay,
    birthYear,
    phone,
    email,
  };

  // Save to localStorage
  const existingData = JSON.parse(localStorage.getItem('applications')) || [];
  existingData.push(applicationData);
  localStorage.setItem('applications', JSON.stringify(existingData));

  // Redirect to details page
  navigate("/details");
};

  return (
    <div className="application-container">
      <div className="application-box">
        <div className="application-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3095/3095583.png"
            alt="Join us"
            className="join-banner"
          />
          <h2>Employment Application</h2>
          <p>
            Fill the form below accurately indicating your potentials and suitability
            to the job applying for.
          </p>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <input
  type="text"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  placeholder="First Name"
  required
/>
           <input
  type="text"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  placeholder="Last Name"
  required
/>
          </div>

          <div className="birth-fields">
            <select 
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
             required>
              <option value="">Month</option>
              {/* Add month options */}
              <option value="">Month</option>
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
            </select>
            <select
             value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            required>
              <option value="">Day</option>
              {/* Add day options */}
               <option value="">Day</option>
  {Array.from({ length: 31 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ))}
            </select>
            <select
             value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            required>
              <option value="">Year</option>
              {/* Add year options */}
              <option value="">Year</option>
  {Array.from({ length: 46 }, (_, i) => (
    <option key={1980 + i} value={1980 + i}>{1980 + i}</option>
  ))}
            </select>
          </div>


          <input 
          type="tel" 
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
          placeholder="(000) 000-0000"
           required />

          <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  required
/>

          <button type="submit" className="submit-button">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default Application;
