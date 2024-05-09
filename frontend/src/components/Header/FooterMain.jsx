import React from 'react';
import img from '../../assets/logo.png';
//import './Footer.css'; // Import the CSS file

const FooterMain = () => {
  return (
    <footer>
      <div className="footer">
      <div className="maps-location-parent">
          <b className="maps-location">Maps Location</b>
          <img className="image-3-icon" alt="" src="" />
        </div>
        <div className="pages-parent">
          <b className="pages">Pages</b>
          <div className="home-appointment-library-container">
            <p className="eye-check-up">{`Home `}</p>
            <p className="eye-check-up">Appointment</p>
            <p className="eye-check-up">Library</p>
            <p className="proudct">Proudct</p>
          </div>
        </div>
        <div className="service-parent">
          <b className="service">Service</b>
          <div className="eye-check-up-container">
            <p className="eye-check-up">Eye Check Up</p>
            <p className="eye-check-up">Optical Products</p>
          </div>
        </div>
        <div className="group-parent">
          <div className="group-wrapper">
            <div className="i-care-wrapper">
              <div className="i-care">I CARE</div>
            </div>
          </div>
          <div className="one-of-the">
            One of the world’s leading opticals providing safe and compasionate
            care as its best for everyone
          </div>
        </div>
       
        
        <div className="contact-parent">
          <b className="contact">Contact</b>
          <div className="parent">
            <div className="div">(0) 555-0120-00</div>
           
          </div>
          <div className="frame-div" />
          <div className="colombosri-lanka-parent">
            <div className="colombosri-lanka">Colombo,Sri Lanka</div>
           
          </div>
          <div className="icare001gmailcom-parent">
            <div className="icare001gmailcom">icare001@gmail.com</div>
            
          </div>
        </div>
        <img className="logo-2-icon" alt="" src={img} />
        <img className="footer-inner" alt="" src="/frame-3.svg" />
        <div className="copyright2024icare">Copyright@2024ICare</div>
        
        
      </div>
    </footer>
  );
};

export default FooterMain;