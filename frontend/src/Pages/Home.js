import React from "react";
import "./Home.css";

const ModifiedHome = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="modified-admin-home">
      <header className="modified-header">
        <img className="modified-logo" src={require("../assets/images/Logo.png")} alt="Logo" />
        <nav className="modified-nav-bar">
          <a href="/">Customer Support System</a>
          <a href="/admin">Admin</a>
          <a href="/eticket">Customer</a>
        </nav>
        <button className="modified-logout-button" onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="modified-main-content">
      <p>Welcome to Customer Support System!</p><br/><br/>
        <a href="http://localhost:3000/home" className="modified-pay-details-button">FAQs</a>
        <a href="http://localhost:3000/sdf" className="modified-pay-details-button">E-tickets</a>
        <a href="http://localhost:3000/df" className="modified-pay-details-button">Chat box</a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><h1>You can solve your problems using our support system.</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h4>The customer support system on our eye care web page is your direct gateway to personalized assistance 
          and expert guidance for all your eye care needs. Whether you're seeking information about our services, scheduling
           appointments, or encountering any challenges with our platform, our dedicated support team is here to ensure your experience is seamless and satisfying.
         With a focus on prompt responsiveness and tailored solutions, our customer support system aims to address your 
         inquiries and concerns swiftly and effectively. Our knowledgeable representatives are equipped with the expertise to 
         provide accurate information, assist with navigating our website, and offer guidance on various eye care-related matters.
         We offer multiple channels of communication, including live chat, email support, and phone assistance, ensuring that you can 
         reach us conveniently and receive the assistance you need in a timely manner. Your satisfaction and well-being are our top priorities,
          and we strive to uphold the highest standards of service excellence in every interaction.
         Whether you're a new visitor exploring our services or a returning customer seeking ongoing support, our customer support system is here to 
         ensure that your journey with us is smooth, informative, and rewarding. Experience the difference of dedicated support tailored to your eye care needs, right at your fingertips.</h4>
        
      </div>

      <footer className="modified-footer">
        <div className="modified-footer-content">
          <div className="modified-footer-column">
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/all-pay-details">All Pay details</a></li>
              <li><a href="/appointments">Appointments</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="modified-footer-column">
            <h3>Services</h3>
            <ul>
              <li>Eye Exams</li>
              <li>Optical Products</li>
            </ul>
          </div>
        </div>
        <p className="modified-copyright">© 2024 Optical Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ModifiedHome;
