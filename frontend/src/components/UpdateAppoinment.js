import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddAppoinment.css'

export default function UpdateAppoinment() {
    let navigate = useNavigate();

    const [appoinmentno, setAppoinmentNo] = useState("");
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [doctorname, setDoctorName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [condition, setCondition] = useState("");
    const [id, setID] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        setAppoinmentNo(localStorage.getItem('appoinmentno'));
        setFullName(localStorage.getItem('fullname'));
        setEmail(localStorage.getItem('email'));
        setDoctorName(localStorage.getItem('doctorname'));
        setDate(new Date(localStorage.getItem('date')).toISOString().slice(0, 10));
        setLocation(localStorage.getItem('location'));
        setTime(localStorage.getItem('time'));
        setCondition(localStorage.getItem('condition'));
        setID(localStorage.getItem('id'));
    }, []);

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const validateForm = () => {
        if (!appoinmentno || !fullname || !email || !doctorname || !date || !time || !location || !condition) {
            setFormError("Please fill in all fields.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const updatedAppoinment = {
                appoinmentno,
                fullname,
                email,
                doctorname,
                date,
                time,
                location,
                condition
            };

            try {
                await axios.put(`http://localhost:5001/appoinments/${id}`, updatedAppoinment);
                alert("Appointment Updated Successfully");
                navigate('/appoinments');
                localStorage.clear();
            } catch (error) {
                alert(error.message);
            }
        }
    };

    return (
        <div className='container'>
            <br />
            <form onSubmit={handleSubmit} className="my-form">
                <div className="mb-3">
                    <label htmlFor="appoinmentno" className="form-label">Appointment No</label>
                    <input type="number" className="form-control" id="appoinmentno" placeholder="Enter Appointment No" value={appoinmentno} onChange={(e) => { setAppoinmentNo(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Enter Name" value={fullname} onChange={(e) => { setFullName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="doctorname" className="form-label">Doctor Name</label>
                    <select className="form-select" id="doctorname" value={doctorname} onChange={(e) => { setDoctorName(e.target.value) }}>
                        <option value="">Select a doctor</option>
                        <option value="Dr. Shangave">Dr. Shangave</option>
                        <option value="Dr. Ashokan">Dr. Ashokan</option>
                        <option value="Dr. Navashanth">Dr. Navashanth</option>
                        <option value="Dr. Ashendra">Dr. Ashendra</option>
                        <option value="Dr. Thivvi">Dr. Thivvi</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Time</label>
                    <input type="time" className="form-control" id="time" value={time} onChange={handleTimeChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <select className="form-select" id="location" value={location} onChange={(e) => { setLocation(e.target.value) }}>
                        <option value="">Select a location</option>
                        <option value="Malabe">Malabe</option>
                        <option value="Vavuniya">Vavuniya</option>
                        <option value="Jaffna">Jaffna</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="condition" className="form-label">Condition</label>
                    <textarea type="text" className="form-control" id="condition" placeholder="Enter Condition" value={condition} onChange={(e) => { setCondition(e.target.value) }} />
                </div>
                {formError && <p className="text-danger">{formError}</p>}
                <button type="submit" className="btn btn-primary">UPDATE</button>
            </form>
        </div>
    )
}
