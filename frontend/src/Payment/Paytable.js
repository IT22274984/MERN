import React, { useEffect, useState, useRef } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from 'react-bootstrap/Button';
import Chart from 'chart.js/auto'; // Import Chart from Chart.js
import logo from '../Logo.jpg';

const Paytable = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const chartRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    // Fetch user profile data
    axios
      .get('http://localhost:4000/server/payment/staffpaymentgetall')
      .then((result) => {
        setUserProfiles(result.data ? result.data.data : []);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter user profiles based on search query
  useEffect(() => {
    const filtered = userProfiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.amount.toString().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  }, [searchQuery, userProfiles]);

  useEffect(() => {
    if (filteredProfiles.length > 0) {
      renderChart();
    }
  }, [filteredProfiles]); // Re-render chart when filteredProfiles changes

  const renderChart = () => {
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }

    const ctx = document.getElementById('paymentChart');
    const labels = filteredProfiles.map(profile => new Date(profile.createdAt).toLocaleDateString());
    const amounts = filteredProfiles.map(profile => parseFloat(profile.amount));

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Amount',
          data: amounts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  const confirmDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this payment profile?')) {
      handleDelete(id);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/server/payment/staffpaymentdelete/${id}`)
      .then(() => {
        setUserProfiles(userProfiles.filter(profile => profile._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const generateReport = () => {
    const doc = new jsPDF();
    
    // Premium styling for the title
    doc.setTextColor(61, 90, 128); // Title color
    doc.setFontSize(24); // Title font size
    doc.text("Payment Report", 105, 20, null, null, "center"); // Title centered
    
    // Styling for the generated date
    doc.setTextColor(100); // Generated date color
    doc.setFontSize(12); // Generated date font size
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 105, 30, null, null, "center"); // Generated date centered
    
    // Generate table
    const tableRows = [];
    let totalPaymentLKR = 0; // Initialize total payment in LKR
    let highestPayment = 0; // Initialize highest payment
    let lowestPayment = Number.MAX_VALUE; // Initialize lowest payment
    filteredProfiles.forEach((profile, index) => {
      const rowData = [
        index + 1,
        profile.name,
        profile.email,
        profile.amount,
        new Date(profile.createdAt).toLocaleDateString()
      ];
      tableRows.push(rowData);
      const amount = parseFloat(profile.amount);
      totalPaymentLKR += amount; // Add amount to total payment in LKR
      if (amount > highestPayment) {
        highestPayment = amount; // Update highest payment if necessary
      }
      if (amount < lowestPayment) {
        lowestPayment = amount; // Update lowest payment if necessary
      }
    });
    
    // Add table to PDF
    doc.autoTable({
      head: [['No', 'Name', 'Email', 'Amount', 'Date']],
      body: tableRows,
      startY: 40, // Start table below dynamic content
      theme: "striped", // Premium stripe theme
      styles: {
        textColor: [61, 90, 128], // Text color for premium look
        lineColor: [61, 90, 128], // Line color for premium look
        lineWidth: 0.5, // Line width for premium look
        font: "helvetica" // Font family for premium look
      },
      headStyles: {
        fillColor: [232, 236, 239], // Head background color for premium look
        textColor: [61, 90, 128] // Head text color for premium look
      },
      bodyStyles: {
        fillColor: [255, 255, 255], // Body background color for premium look
        textColor: [61, 90, 128] // Body text color for premium look
      },
    });
    
    // Convert total payment to LKR
    const exchangeRate = 0.0047; // 1 USD = 225 LKR (example exchange rate)
    const totalPaymentUSD = totalPaymentLKR / exchangeRate;
    
    // Calculate and display total payment in LKR
    const startY = doc.previousAutoTable.finalY + 10; // Start position below the table
    doc.text(`Total Payment (LKR): ${totalPaymentLKR.toFixed(2)}`, 14, startY);
    
    // Display summary of highest and lowest payments
    doc.text(`Highest Payment(LKR): ${highestPayment.toFixed(2)}`, 14, startY + 20);
    doc.text(`Lowest Payment(LKR): ${lowestPayment.toFixed(2)}`, 14, startY + 30);
    
    // Draw chart
    const chartImgData = chartRef.current.toBase64Image();
    const imgHeight = 100;
    const imgWidth = (chartRef.current.width * imgHeight) / chartRef.current.height;
    doc.addImage(chartImgData, 'JPEG', 10, startY + 50, imgWidth, imgHeight);
    
    // Save PDF
    doc.save('Payment_Report.pdf');
  };
  

  return (
    <div className="paytable-container">
      <header className="header">
        <img src={logo} alt="Your image description" style={{ width: '100px', height: 'auto' }} />
        <nav className="nav-bar">
          <a href="http://localhost:3000/home">Home</a>
          <a href="/all-pay-details">All Pay details</a>
          <a href="/appointments">Appointments</a>
          <a href="/support">Support</a>
        </nav>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, email, amount..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <table className='payment-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProfiles.map((profile) => (
            <tr key={profile._id}>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>{profile.amount}</td>
              <td>{new Date(profile.createdAt).toLocaleDateString()}</td>
              <td>
                <button onClick={() => confirmDelete(profile._id)} className='payment-btn-delete'>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart-container">
        <canvas id="paymentChart"></canvas>
      </div>
      <Button variant="primary" onClick={generateReport}>Download PAY Report</Button>
    </div>
  );
};

export default Paytable;
