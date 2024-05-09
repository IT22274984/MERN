import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/crud.css";
import Formtable from "../components/Formtable";
// import backgroundImage from '../components/image/bnm.jpg';  // Importing the background image
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/users/";

export default function Client() {
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    color: "",
    size: "",
    add: "",
    quan: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    color: "",
    size: "",
    add: "",
    quan: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${BASE_URL}create`, formData);
      if (data.success) {
        alert("Submitted");
        getFetchData();
      }
    } catch (error) {
      alert("Error submitting data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getFetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(BASE_URL);
      setDataList(data.data);
      console.log(data.data)
    } catch (error) {
      alert("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete/${id}`);
      alert(response.data.message);
      getFetchData();
    } catch (error) {
      alert("Error deleting item. Please try again.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.put(`${BASE_URL}update`, formDataEdit);
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
        setEditSection(false);
      }
    } catch (error) {
      alert("Error updating item. Please try again.");
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  return (
    <>
      <div className="container" >
        <button
          className="btn btn-view"
          onClick={() => setTableVisible(!tableVisible)}
        >
          Customer Details
        </button>
        <button className="btn btn-view" onClick={() => navigate("/admincr")}>
          Admin
        </button>
        {tableVisible && (
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>

      {tableVisible && (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Color</th>
                <th>Size</th>
                <th>Adding</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList
                .filter(
                  (el) =>
                    el?.color?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    el?.size?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    el?.add?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    el?.quan?.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((el) => (
                  <tr key={el?._id}>
                    <td>{el?.color}</td>
                    <td>{el?.size}</td>
                    <td>{el?.add}</td>
                    <td>{el?.quan}</td>
                    <td>
                      <button className="btn btn-edit" onClick={() => handleEdit(el)}>
                        Edit
                      </button>
                      <button className="btn btn-delete" onClick={() => handleDelete(el._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {editSection ? (
        <Formtable
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleClose={() => setEditSection(false)}
          rest={formDataEdit}
          loading={loading}
        />
      ) : (
        <Formtable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleClose={() => setEditSection(false)}
          rest={formData}
          loading={loading}
        />
      )}
    </>
  );
}
