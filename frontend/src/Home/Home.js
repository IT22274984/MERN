// Home.js

import { useState } from "react";
import axios from "axios";
import "./Home.css";
import logo from '../Logo.jpg'

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="admin-home">
      <header className="header">
      <img src={logo} alt="Your image description" style={{ width: '100px', height: 'auto' }} />
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/all-pay-details">All Pay details</a>
          <a href="/appointments">Appointments</a>
          <a href="/support">Support</a>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="main-content">
        <h1>Welcome, Admin!</h1>
        <p>You can manage various aspects of the application here.</p>
        <a href="http://localhost:3000/AllPay" className="pay-details-button">All Pay details</a>
        {/* Add more buttons or content as needed */}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/all-pay-details">All Pay details</a></li>
              <li><a href="/appointments">Appointments</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Eye Exams</li>
              <li>Optical Products</li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2024 Optical Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
