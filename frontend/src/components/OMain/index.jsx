//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\client\src\components\OMain\index.jsx
import { useState,useEffect } from "react";
import axios from "axios";
import "./OptometristHome.css";
import { Link, useNavigate } from "react-router-dom";
import Prescriptions from "../Prescription/Prescriptions";
import Header from "../Header/Header"
import img from '../../assets/logo.png'
import img1 from '../../assets/test1.jpg'
import img2 from '../../assets/number.jpg'
import Footermain from "../Header/FooterMain";

const OptometristHome = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [error, setError] = useState("");
  const [searchResult, setSearchResult] = useState("pending"); // Can be "pending", "found", or "notFound"


    const handleSearch = async () => {
      const isValidMobile = /^[0-9]{10}$/.test(searchQuery);
      if (!isValidMobile) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }

        try {
          const url = `http://localhost:4000/api/customers/search/${searchQuery}`;
            const { data } = await axios.get(url);
            if (data) {
              setSelectedCustomer(data[0]); // Assuming the API returns an array of customers and you want to select the first one
              setSearchResult("found");
          } else {
              setSelectedCustomer(null);
              setSearchResult("notFound");
              setError("No customer found for the entered mobile number.");
          }
          setError(""); // Clear any previous error
        } catch (error) {
            console.error(error);
            setError("An error occurred. Please try again.");
            setSearchResult("notFound");
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
    // <Prescriptions data={data} />
      // Handle view reports logic
      navigate('/prescriptions',{ state: { customer: selectedCustomer } });
  };

  const handleMarkAttendance = () => {
    // Update attendance status
    setIsPresent(true);
  };

 
  return (
    <div>
    <div className="optometristhome">
      
       <header>
        <Header/>
       </header>
       </div>

       
      <div className="component">
      <b className="mark-attendance">Mark Attendance</b>
          <div className="confirm-your-present">{`Confirm your present, it’s easy to calculate presents.`}</div>
          <div className="component-item" />
          {isPresent ? (
            <div className="attendance-marked">Attendance Marked!</div>
            
          ) : (
            <button className="confirm" onClick={handleMarkAttendance}>Mark Attendance</button>
          )}
          
         
          <img className="number" alt="" src={img2} />
      </div>

      
      <img className="test" alt="" src={img1} />
     
      
      <footer>
       <Footermain/>
      </footer>

      
      <div className="search-button">
      {signupDetails && (
        <div className="signup-details">
           <h4>.</h4>
          <h3> Dr. {signupDetails.firstName} {signupDetails.lastName}</h3>
          <h3> {signupDetails.email}</h3>
        </div>
      )}
      </div>

      




      <div className="group-parent1">
        <div className="rectangle-parent1">
          
          <div className="search">
          <input
                            type="text"
                            placeholder="Search by customer Mobile Number"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button> 
                        {error && <p className="error">{error}</p>}
  {searchResult === "notFound" && (
    <p className="not-found">No customer found for the entered mobile number.</p>
  )}
  {selectedCustomer && searchResult === "found" && (
  <div className="customer-details">
    <h2>Customer Details</h2>
    <p>Name: {selectedCustomer.firstName} {selectedCustomer.lastName}</p>
    <p>Email: {selectedCustomer.email}</p>
    <br></br>
    <button onClick={handleUploadReport}>Upload Prescription</button>
   
       <button onClick={handleViewReports}>Prescription Reports</button>
    

    <img className="option" alt="" src={img} />
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
