import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Data.css'; // Import the CSS file
import jsPDF from 'jspdf';

function Data() {
  const [quantities, setQuantities] = useState({
    'Sun Glasses': '',
    'Spectacles': '',
    'Contact Lenses': '',
    'Gift Vouchers': '',
    'Sports Vision': '',
    'Accessories': ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuantities({
      ...quantities,
      [name]: value.replace(/\D/, '') // Ensure only numbers are entered
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(quantities);
    setSubmitted(true);
    const confirmation = window.confirm('Successfully updated. Click OK to view the bar chart.');
    if (confirmation) {
      const chartContainer = document.querySelector('.chart-container');
      if (chartContainer) {
        chartContainer.scrollIntoView({ behavior: 'smooth' });
      }
      generatePDF();
    }
  };
  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 20;
  
    doc.text('Optical Summary', 10, y);
    y += 10;
  
    // Draw table headers
    doc.setFont('helvetica', 'bold');
    doc.text('Item', 10, y);
    doc.text('Quantity', 80, y);
    y += 10;
    doc.line(10, y, 120, y); // horizontal line
    y += 5;
  
    // Draw table data
    doc.setFont('helvetica', 'normal');
    Object.entries(quantities).forEach(([key, value]) => {
      doc.text(key, 10, y);
      doc.text(value, 80, y);
      y += 7;
    });
  
    // Add bar chart as an image
    const chartSvg = document.querySelector('.chart-container svg');
    if (chartSvg) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const svgData = new XMLSerializer().serializeToString(chartSvg);
      const svgSize = chartSvg.getBoundingClientRect();
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;
  
      const img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, y + 10, 180, 90);
        doc.save('optical_summary.pdf');
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="Sun Glasses">Sun Glasses:</label>
        <input
            type="text"
            id="Sun Glasses"
            name="Sun Glasses"
            value={quantities['Sun Glasses']} // Use 'Sun Glasses' as key
            onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="Spectacles">Spectacles:</label>
        <input
            type="text"
            id="Spectacles"
            name="Spectacles"
            value={quantities['Spectacles']} // Use 'Spectacles' as key
            onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="Contact Lenses">Contact Lenses:</label>
        <input
            type="text"
            id="Contact Lenses"
            name="Contact Lenses"
            value={quantities['Contact Lenses']} // Use 'Contact Lenses' as key
            onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="Gift Vouchers">Gift Vouchers:</label>
        <input
            type="text"
            id="Gift Vouchers"
            name="Gift Vouchers"
            value={quantities['Gift Vouchers']} // Use 'Gift Vouchers' as key
            onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="Sports Vision">Sports Vision:</label>
        <input
            type="text"
            id="Sports Vision"
            name="Sports Vision"
            value={quantities['Sports Vision']} // Use 'Sports Vision' as key
            onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="Accessories">Accessories:</label>
        <input
            type="text"
            id="Accessories"
            name="Accessories"
            value={quantities['Accessories']} // Use 'Accessories' as key
            onChange={handleChange}
        />
</div>

        <button type="submit">Submit</button><br></br>
        <button type="button" onClick={generatePDF}>Generate Report</button>
      </form>
      {submitted && (
        <div className="chart-container">
          <p>Successfully updated. Here's the bar chart:</p>
          <BarChart width={600} height={300} data={Object.entries(quantities).map(([key, value]) => ({ name: key, quantity: parseInt(value) }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </div>
  );
}

export default Data;
