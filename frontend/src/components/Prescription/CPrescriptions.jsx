import React, { useEffect, useState } from "react";
import "./Prescription.css";
import axios from "axios";
import CPrescription from "./CPrescription";
import Header from "../Header/Header";

const URL = "http://localhost:8080/prescriptions";
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
      <header>
        <Header/>
       </header>
      <ul>
        {prescriptions &&
          prescriptions.map((prescription, i) => (
            <li key={i}>
              <CPrescription prescription={prescription} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
