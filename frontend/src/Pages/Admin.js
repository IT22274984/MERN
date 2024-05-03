import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/users/";

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Color", "Size", "Adding", "Quantity"];
    const tableRows = [];

    dataList.forEach((item) => {
      const rowData = [item.color, item.size, item.add, item.quan.toString()];
      tableRows.push(rowData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("table_data.pdf");
  };

  const filterData = (item) => {
    const searchLower = searchTerm.toLowerCase();
    return item.color.toLowerCase().includes(searchLower) ||
           item.size.toLowerCase().includes(searchLower) ||
           item.add.toLowerCase().includes(searchLower) ||
           item.quan.toString().toLowerCase().includes(searchLower);
  };

  return (
    <>
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
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Color</th>
                <th>Size</th>
                <th>Adding</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {dataList && dataList.length > 0 ? (
                dataList.filter(filterData).map((el) => (
                  <tr key={el._id}>
                    <td>{el.color}</td>
                    <td>{el.size}</td>
                    <td>{el.add}</td>
                    <td>{el.quan}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
