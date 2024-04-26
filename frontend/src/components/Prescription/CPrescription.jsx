import React from 'react';
import { Button } from "@mui/material";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import "./Prescription.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const Prescription = (props) => {
  const history = useNavigate();
  const { _id, Sphere, Cylinder, Axis, PupilDistance, Lence, Description } = props.prescription;
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
  

  return (
    <div className="card">
      <p><strong>Sphere:</strong> {Sphere}</p>
      <p><strong>Cylinder:</strong> {Cylinder}</p>
      <p><strong>Axis:</strong> {Axis}</p>
      <p><strong>PupilDistance:</strong> {PupilDistance}</p>
      <p><strong>Lence:</strong> {Lence}</p>
      <p><strong>Description:</strong> {Description}</p>
      <p></p>
      <Button onClick={generateReport} variant="contained">Download Prescription</Button>
    </div>
  );
};

export default Prescription;
