//sample/client/src/components/Prescription/Prescriptions.jsx
import React, { useEffect, useState } from "react";
import "./Prescription.css";
import axios from "axios";
import Prescription from "./Prescription";
import Header from "../Header/Header";
import { useLocation } from 'react-router-dom';
import Footermain from "../Header/FooterMain";

const Prescriptions = () => {

  const location = useLocation();

  // Access the customer details from the location state
  const { customer } = location.state || {};

console.log(customer.Mobilenumber);

const { mobile } = location.state;
console.log(mobile);
const URL = `http://localhost:4000/prescriptions/customers/${customer.Mobilenumber}`;
const fetchHandler = async () => {
return await axios.get(URL).then((res) => res.data);
};
 

  const [prescriptions, setPrescriptions] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPrescriptions(data.prescriptions));
  }, []);
  console.log(prescriptions);

  
  return (
    <div>
      <header>
        <Header/>
       </header>
      <ul>
        {prescriptions &&
          prescriptions.map((prescription, i) => (
            <li key={i}>
              <Prescription prescription={prescription} />
            </li>
          ))}
      </ul>
      <footer>
       <Footermain/>
      </footer>
    </div>
  );
};

export default Prescriptions;
