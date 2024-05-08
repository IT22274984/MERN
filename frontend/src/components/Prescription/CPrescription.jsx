import React from 'react';
import { Button } from "@mui/material";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import "./Prescription.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import img from '../../assets/logo.png'

const Prescription = (props) => {
  const history = useNavigate();
  const { _id, Sphere, Cylinder, Axis, PupilDistance, Lence, Description,Mobilenumber } = props.prescription;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/prescriptions/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/prescriptions"));
  };

  const generateReport = () => {
    const doc = new jsPDF();
  
    // Set up the initial y position for text
    let yPos = 10;
  
    // Add the details to the PDF
    doc.setFontSize(15);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100);

    doc.text(`Sphere: ${Sphere}`, 10, yPos);
    yPos += 10;
    doc.text(`Cylinder: ${Cylinder}`, 10, yPos);
    yPos += 10;
    doc.text(`Axis: ${Axis}`, 10, yPos);
    yPos += 10;
    doc.text(`Pupil Distance: ${PupilDistance}`, 10, yPos);
    yPos += 10;
    doc.text(`Lence: ${Lence}`, 10, yPos);
    yPos += 10;
    doc.text(`Description: ${Description}`, 10, yPos);

    doc.setLineWidth(0.5);
  doc.rect(5, 5, 200, 100);
  
    // Save the PDF
    doc.save('Prescription.pdf');
  };
  
  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <div className="card">
      <img className="presc" alt="" src={img} />
       <div>
        <h3> Prescription Details</h3>
        <p><strong>Dr.Navashanth  </strong> . . . . . . . . . . . . . . . . . . .<strong>Date:</strong> {currentDate}</p>
        <h4>------------------------------------------------------------------------</h4>
        <div className="details">
          <p><strong>Mobile Number:</strong> {Mobilenumber}</p>
          <p><strong>Sphere:</strong> {Sphere}D</p>
          <p><strong>Cylinder:</strong> {Cylinder}D</p>
          <p><strong>Axis:</strong> {Axis} degrees</p>
          <p><strong>PupilDistance:</strong> {PupilDistance}mm</p>
          <p><strong>Lence:</strong> {Lence}</p>
          <p><strong>Description:</strong> {Description}</p>
        </div>
      </div>
      <Button onClick={generateReport} variant="contained">Download Prescription</Button>
    </div>
  );
};

export default Prescription;
