//Prescriptions.js
import React, { useEffect, useState } from "react";
import "./Prescription.css";
import axios from "axios";
import Prescription from "./Prescription";
const URL = "http://localhost:5000/prescriptions";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setPrescriptions(data.prescriptions));
  }, []);
  console.log(prescriptions);
  return (
    <div>
      <ul>
        {prescriptions &&
          prescriptions.map((prescription, i) => (
            <li key={i}>
              <Prescription prescription={prescription} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
