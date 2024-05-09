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
      .delete(`http://localhost:4000/prescriptions/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/prescriptions"));
  };

  const generateReport = () => {
    const doc = new jsPDF();

    // Add border
  doc.setLineWidth(0.5);
  doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10);

  
    // Add image
    const imgData = img; // Assuming img contains the base64 or URL of the image
    doc.addImage(imgData, 'PNG', 10, 10, 50, 50);
  
    // Add text
    doc.setFontSize(31);
    const prescriptionDetailsText = "Prescription Details";
    const prescriptionDetailsTextWidth = doc.getStringUnitWidth(prescriptionDetailsText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const centerX = (doc.internal.pageSize.width - prescriptionDetailsTextWidth) / 2;
    doc.text(prescriptionDetailsText, centerX, 32);
  
    // Add date
    const currentDate = new Date().toLocaleDateString('en-GB');
    const dateText = `Date: ${currentDate}`;
    const dateTextWidth = doc.getStringUnitWidth(dateText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text(dateText, doc.internal.pageSize.width - dateTextWidth - 10, 65);
  
    // Add Dr.Navashanth
    doc.setFontSize(27);
    const drNavashanthText = "Dr.Navashanth";
    doc.text(drNavashanthText, 10, 65);
  
    // Add prescription details
    doc.setFontSize(20);
    let yPos = 90;
    doc.text(`Mobile Number: ${Mobilenumber}`, 10, yPos);
    yPos += 10;
    doc.text(`Sphere: ${Sphere}D`, 10, yPos);
    yPos += 10;
    doc.text(`Cylinder: ${Cylinder}D`, 10, yPos);
    yPos += 10;
    doc.text(`Axis: ${Axis} degrees`, 10, yPos);
    yPos += 10;
    doc.text(`Pupil Distance: ${PupilDistance}mm`, 10, yPos);
    yPos += 10;
    doc.text(`Lence: ${Lence}`, 10, yPos);
    yPos += 10;
    doc.text(`Description: ${Description}`, 10, yPos);
  
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
