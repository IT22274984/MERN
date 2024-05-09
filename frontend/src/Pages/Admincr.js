import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/crud.css";
import { Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Chart from 'chart.js/auto';
import logoImage from "../components/image/Logo.png";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/users/";

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Sum of Quantities',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    }]
  });


  const getFetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(BASE_URL);
      setDataList(data.data);
    } catch (error) {
      alert("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    const additions = {}; // Object to store sum of quantities for each addition
    dataList.forEach(item => {
      if (additions[item.add]) {
        additions[item.add] += parseInt(item.quan); // Adding quantity to existing addition
      } else {
        additions[item.add] = parseInt(item.quan); // Creating a new entry for the addition
      }
    });
  
    setChartData({
      labels: Object.keys(additions), // Using additions as x-axis labels
      datasets: [{
        ...chartData.datasets[0],
        data: Object.values(additions) // Sum of quantities as y-axis data
      }]
    });
  }, [dataList]);
  
  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Color", "Size", "Adding", "Quantity"];
    const tableRows = [];
  
    dataList.forEach((item) => {
      const rowData = [item.color, item.size, item.add, item.quan.toString()];
      tableRows.push(rowData);
    });
  
    // Add logo image and set heading
    const imgData = logoImage;
    doc.addImage(imgData, "PNG", 10, 10, 50, 50);
    doc.setFontSize(20);
    doc.text("I CARE", 100, 100);
  
    // Generate the table
    doc.autoTable(tableColumn, tableRows, { startY: 70 });
  
    // Generate the chart
    const canvas = document.querySelector(".chartContainer canvas");
    if (canvas) {
      const imgDataURI = canvas.toDataURL("image/png");
      doc.addImage(imgDataURI, "PNG", 10, doc.autoTable.previous.finalY + 10, 180, 100);
    }
  
    doc.save("I_Care_Report.pdf");
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete/${id}`);
      alert(response.data.message);
      getFetchData();
    } catch (error) {
      alert("Error deleting item. Please try again.");
    }
  };

  const filterData = (item) => {
    const searchLower = searchTerm.toLowerCase();
    return item?.color?.toLowerCase().includes(searchLower) ||
           item?.size?.toLowerCase().includes(searchLower) ||
           item?.add?.toLowerCase().includes(searchLower) ||
           item?.quan?.toString().toLowerCase().includes(searchLower);
  };

  return (
    <div className="admin-container">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search"
        />
      </div>
      
      <button className="btn-report" onClick={generatePDF} disabled={dataList.length === 0}>Generate Report</button>
      
      {loading ? <p>Loading...</p> : (
        <div className="table-graph-container">
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Adding</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataList && dataList.length > 0 ? (
                  dataList.filter(filterData).map((el) => (
                    <tr key={el._id}>
                      <td>{el?.color}</td>
                      <td>{el?.size}</td>
                      <td>{el?.add}</td>
                      <td>{el?.quan}</td>
                      <td><button className="delete-button" onClick={() => handleDelete(el._id)}>Delete</button>
</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="chartContainer">
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
}
