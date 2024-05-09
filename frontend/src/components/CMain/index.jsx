//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\client\src\components\CMain\index.jsx

/*import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";


const CMain = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	

	const navigate = useNavigate();
	const handleViewReports = () => {
		// Handle view reports logic
		navigate('/Cprescriptions');
	};


	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>ICare</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			
            
			<button onClick={handleViewReports}>Prescription</button>
		</div>


	);
};

export default CMain;*/

// Home.js

import { useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import img from '../../assets/logo.png'

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  
	const navigate = useNavigate();
	const handleViewReports = () => {
		// Handle view reports logic
		navigate('/Cprescriptions');
	};

  return (
    <div className="admin-home">
      <header className="header">
        <img className="logo" src={img} alt="Logo" />
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/all-pay-details">All Pay details</a>
          <a href="/appointments">Appointments</a>
          <a href="/support">Support</a>
		  <button onClick={handleViewReports} className="pay-details-button">£</button>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="main-content">
      <h1 className='text-3xl font-bold mb-4
      text-slate-800'>Welcome to ICARE!</h1>
      <p className='mb-4 text-slate-700'>We're excited to introduce you to a revolutionary
       approach to eye health management. Our innovative app is designed to empower you with 
       personalized tools and insights to prioritize your vision wellness. Onour home page,
       you'll discover a comprehensive suite of features aimed at enhancing your eye care routine.
       Receive tailored recommendations based on your unique eye health profile and usage patterns.
       Engage in customized eye exercise programs crafted to reduce strain and enhance focus. Set 
       convenient reminders for breaks and appointments to ensure you stay proactive about your 
       eye health. Our vision tracking tools allow you to monitor changes over time, providing 
       valuable insights into your eye health journey. Moreover, tap into a vast library of expert 
       resources, including articles curated by eye care professionals, to stay informed and empowered.
      </p>
      <p className='mb-4 text-slate-700'>At the heart of our ICARE is a commitment to making 
      eye care accessible and effective for everyone.Our user-friendly interface ensures a seamless 
      experience, allowing you to navigate through our features effortlessly. We prioritize scientific
        rigor, with all our recommendations and exercises backed by proven research. Whether you're looking 
        to adopt healthier eye care habits or manage existing conditions, our app serves as your trusted
         companion. Join a supportive community of like-minded individuals to share experiences and motivation.
         Together, we'll embark on a journey towards better eye health, one personalized step at a time.
      </p>
      <p className='mb-4 text-slate-700'>Take the first step towards healthier eyes today by 
      downloading our Eye Care App. We're not just an app; we're your dedicated partner in vision
       wellness. Embrace a holistic approach to eye care, encompassing daily habits, personalized 
       insights, and expert guidance. Our mission is to empower you with the tools and knowledge 
       needed to maintain optimal eye health. Discover the difference with our app and unlock a new level
       of care for your eyes. Let's prioritize your vision wellness together and embark on a 
       journey towards healthier eyes!
      </p>
       
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
