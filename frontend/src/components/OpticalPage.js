import React from "react";
import Optical from "./Optical";

const OpticalPage = (props) => {
  const generateReport = () => {
    // Generate report logic here
    console.log("Generating report for all opticals...");
  };

  return (
    <div>
      {props.opticals.map((optical) => (
        <Optical key={optical._id} optical={optical} generateReport={generateReport} />
      ))}
    </div>
  );
};

export default OpticalPage;
