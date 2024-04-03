//Prescriptions.js
import React, { useEffect, useState } from "react";
import "./Prescription.css";
import axios from "axios";
import Prescription from "./Prescription";
const URL = "http://localhost:5000/prescription";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Prescriptions = () => {
  const [prescription, setPrescriptions] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPrescriptions(data.prescription));
  }, []);
  console.log(prescription);
  return (
    <div>
      <ul>
        {prescription &&
          prescription.map((Prescription, i) => (
            <li key={i}>
              <Prescription Prescription={Prescription} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
