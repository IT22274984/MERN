//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\client\src\components\OMain\index.jsx
import { useState,useEffect } from "react";
import axios from "axios";
import "./OptometristHome.css";
import { useNavigate } from "react-router-dom";
import Prescriptions from "../Prescription/Prescriptions";
import Header from "../Header/Header"
import img from '../../assets/logo.png'

const OptometristHome = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showPrescriptions, setShowPrescriptions] = useState(false);


    const handleSearch = async () => {
        try {
          const url = `http://localhost:8080/api/customers/search/${searchQuery}`;
            const { data } = await axios.get(url);
            if (data) {
              setSelectedCustomer(data[0]); // Assuming the API returns an array of customers and you want to select the first one
          } else {
              setSelectedCustomer(null);
          }
        } catch (error) {
            console.error(error);
        }
    };

    const [signupDetails, setSignupDetails] = useState(null);

    useEffect(() => {
      const details = localStorage.getItem("signupDetails");
      if (details) {
          setSignupDetails(JSON.parse(details));
      }
  }, []);

    const navigate = useNavigate();
    const handleUploadReport = () => {
      // Handle upload report logic
      navigate("/add", { state: { customer: selectedCustomer } });
  };

    const handleViewReports = () => {
      // Handle view reports logic
      navigate('/prescriptions');
  };
 
  return (
    <div className="optometristhome">
      
       <header>
        <Header/>
       </header>
      <div className="component">
        
        <b className="mark-attendance">Mark Attendance</b>
        <div className="confirm-your-present">{`Confirm  your present ,it’s easy to calculate presents. `}</div>
        <div className="component-item" />
        <div className="confirm">Confirm</div>
      </div>
      
      
      
      <div className="search-button">
      {signupDetails && (
        <div className="signup-details">
          <h2>Optometrist Signup Details</h2>
          <p>First Name: {signupDetails.firstName}</p>
          <p>Last Name: {signupDetails.lastName}</p>
          <p>Email: {signupDetails.email}</p>
        </div>
      )}
      </div>
      
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
      <div className="group-parent1">
        <div className="rectangle-parent1">
          
          <div className="search">
          <input
                            type="text"
                            placeholder="Search by customer name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>                  
{selectedCustomer && (
  <div className="customer-details">
    <h2>Customer Details</h2>
    <p>Name: {selectedCustomer.firstName} {selectedCustomer.lastName}</p>
    <p>Email: {selectedCustomer.email}</p>
    <button onClick={handleUploadReport}>Upload Prescription</button>
    <button onClick={handleViewReports}>Prescription Reports</button>
  </div>
)}
{showPrescriptions && <Prescriptions />}

        </div>
        </div>
        
      </div>
    </div>
  );
};

export default OptometristHome;
