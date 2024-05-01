import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AllAppoinments.css'

export default function AllAppoinments() {
    const[appoinments, setAppoinments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    let navigate = useNavigate();
    const getData = async () => {
        await axios.get("http://localhost:5001/appoinments")
        .then((res) => {            
            setAppoinments(res.data)
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    const GenerateReport = () => {
        const XLSX = require("xlsx");
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(appoinments);
        XLSX.utils.book_append_sheet(wb, ws, "Appointment Report");
        const wbBlob = new Blob([XLSX.write(wb, { type: "array", bookType: "xlsx" })], { type: "application/octet-stream" });
        const url = URL.createObjectURL(wbBlob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "Appointment-report.xlsx");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:5001/appoinments/${id}`)
        .then(() => {
            alert("Appoinment Deleted Successfully")
            getData();
        })
        .catch((err) => {
            alert(err.message);
        })
    }

    

    useEffect(() => {
        getData();
    }, [])

    if(!appoinments)
    return alert("No Appoinments")

    const onUpdate = (data) => {
        localStorage.setItem('id', data._id);
        localStorage.setItem('appoinmentno', data.appoinmentno);
        localStorage.setItem('fullname', data.fullname);
        localStorage.setItem('email', data.email);
        localStorage.setItem('doctorname', data.doctorname);
        localStorage.setItem('date', data.date);
        localStorage.setItem('condition', data.condition);

        navigate('/update-appoinment');
    }

    if(!appoinments) return alert ('No Appointments');
    const filteredAppointments = appoinments.filter((appoinments) => {
        return appoinments.fullname.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return(
        <div className="container">
            <h1 style={{textAlign: 'center', fontFamily: 'cursive', fontSize: '50px'}}>All Appointments</h1>
            <div className="container">
                <div>
                    <button className="button-add" onClick={() => navigate("/add-appoinment")}>
                        Add Appoinments
                    </button>
                </div>
                  <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Patient Name"
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
            <button 
            type = "button"
            className ="btn-report"
            onClick={() => GenerateReport()}>Generate Report</button>
                <table style={{ textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Appoinment No</th>
                            <th style={{ textAlign: 'center' }}>Patient Name</th>
                            <th style={{ textAlign: 'center' }}>Email</th>
                            <th style={{ textAlign: 'center' }}>Doctor Name</th>
                            <th style={{ textAlign: 'center' }}>Date</th>
                            <th style={{ textAlign: 'center' }}>Time</th>
                            <th style={{ textAlign: 'center' }}>Location</th>
                            <th style={{ textAlign: 'center' }}>Condition</th>
                            <th style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredAppointments.map(appoinment => (
                            <tr key={appoinment._id}>
                                <td style={{ textAlign: 'center' }}>{appoinment.appoinmentno}</td>
                                <td >{appoinment.fullname}</td>
                                <td>{appoinment.email}</td>
                                <td>{appoinment.doctorname}</td>
                                <td>{new Date(appoinment.date).toISOString().slice(0,10)}</td>
                                <td>{appoinment.time}</td>
                                <td>{appoinment.location}</td>
                                <td>{appoinment.condition}</td>
                                <td>    
                                    <button type='button' className="btn-update" onClick={() => onUpdate(appoinment)}>Update</button>
                                    &nbsp;
                                    <button type='button' className="btn-delete" onClick={() => onDelete(appoinment._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )         
}
