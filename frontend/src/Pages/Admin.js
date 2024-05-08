import React, { useEffect, useState } from 'react';
import axios from "axios";
import emailjs from "emailjs-com"; // Correct import statement
import "../App.css";
import Formtable from "../components/Formtable";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/users/";

export default function Admin() {
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    
  });
  const [formDataEdit, setFormDataEdit] = useState({
    user_name: "",
    user_email: "",
    message: "",
    _id : ""
  });
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableVisible, setTableVisible] = useState(false); 
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true); 
        const { data } = await axios.post(BASE_URL + "create", formData);

        if (data.success) {
            alert(data.Message); 
            await getFetchData(); 
        }
    } catch (error) {
        console.error("Error:", error); 
        alert("Error submitting data. Please try again."); 
    } finally {
        setLoading(false);
    }
};



  const getFetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(BASE_URL); 
      if (data.success) {
        setDataList(data.data);
      }
    } catch (error) {
      console.error("Error:", error);
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
      
      const response = await axios.delete(BASE_URL + `delete/${id}`);
      alert(response.data.message); 
      getFetchData(); 
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item. Please try again.");
    }
  };
  
  const handleUpdate = async (e) => {
    e.preventDefault(); 
    try {
        
        const response = await axios.put(`${BASE_URL}update`, formDataEdit);

       
        if (response.data.success) {
            await getFetchData(); 
            alert(response.data.message); 
            setEditSection(false); 
        }
    } catch (error) {
        console.error("Error updating:", error); 
        alert("Error updating item. Please try again."); 
    }
};

  
  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-view" onClick={() => setTableVisible(!tableVisible)}>View Details</button>
      </div>
      
      {tableVisible && (
        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Status</th>               
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((el) => (
                <tr key={el?.id}> 
                  <td>{el?.user_name}</td>
                  <td>{el?.user_email}</td>
                  <td>{el?.message}</td>
                  <td>
                    <button className='btn btn-edit' onClick={() => handleEdit(el)}>Edit</button>
                    <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editSection && (
        <Formtable
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleclose={() => setEditSection(false)}
          rest={formDataEdit}
          loading={loading}
        />
      )}
      {!editSection && (
        <Formtable
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose={() => setEditSection(false)}
          rest={formData}
          loading={loading}
        />
      )}
    </>
  );
}

