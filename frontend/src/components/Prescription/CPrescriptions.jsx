import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Prescription.css";
import axios from "axios";
import CPrescription from "./CPrescription";
import Header from "../Header/Header";
import Footermain from "../Header/FooterMain";

const URL = "http://localhost:4000/prescriptions";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPrescriptions, setFilteredPrescriptions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setPrescriptions(data.prescriptions));
  }, []);

  const handleSearch = () => {
    const isValidMobile = /^[0-9]{10}$/.test(searchQuery);
    if (!isValidMobile) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const filtered = prescriptions.filter((prescription) => prescription.Mobilenumber === searchQuery);
    if (filtered.length === 0) {
      setError("No prescriptions found for the entered mobile number.");
    } else {
      setFilteredPrescriptions(filtered);
      setError(""); // Clear any previous error
    }
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <TextField
        label="Search by Mobile Number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained">
        Search
      </Button>
      {error && <p className="error">{error}</p>}

      <ul>
        {(filteredPrescriptions.length > 0 ? filteredPrescriptions : prescriptions).map((prescription, i) => (
          <li key={i}>
            <CPrescription prescription={prescription} />
          </li>
        ))}
      </ul>

      <Footermain />
    </div>
  );
};

export default Prescriptions;
