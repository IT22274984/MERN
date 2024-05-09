import React, { useEffect, useState } from "react";
import "./Optical.css";
import axios from "axios";
import Optical from "./Optical";

const URL = "http://localhost:4000/opticals";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Opticals = () => {
  const [opticals, setOpticals] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setOpticals(data.opticals));
  }, []);

  console.log(opticals);

  return (
    <div>
      <ul>
        {opticals &&
          opticals.map((optical, i) => (
            <li key={i}>
              <Optical optical={optical} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Opticals;
