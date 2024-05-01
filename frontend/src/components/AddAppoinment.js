import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import '../styles/AddAppoinment.css'

export default function AddAppoinment() {
    let navigate = useNavigate();

    const [appoinmentno, setAppoinmentNo] = useState("");
    const [fullname, setFullName] = useState();
    const [email, setEmail] = useState("");
    const [doctorname, setDoctorName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [condition, setCondition] = useState("");
    
    
    async function addAppoinment(e) {
        e.preventDefault();

        const newAppoinment = {
            appoinmentno,
            fullname,
            email,
            doctorname,
            date,
            time,
            location,
            condition
        }

        await axios.post("http://localhost:5001/appoinments",newAppoinment)
        .then(() => {
            alert("Appoinment Added Successfully");
            navigate('/appoinments');
        })
        .catch(err => {
            alert(err);
        })
    }
      
        const getCurrentDate = () => {
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          let month = (currentDate.getMonth() + 1).toString();
          let day = currentDate.getDate().toString();
      
          // Add leading zero if month/day is a single digit
          month = month.length === 1 ? '0' + month : month;
          day = day.length === 1 ? '0' + day : day;
      
          return `${year}-${month}-${day}`;
        };
        const handleTimeChange = (event) => {
            setTime(event.target.value);
          };
        

    return (
        <div className='container'>
            <br></br>
           
            <form onSubmit={addAppoinment} className="my-form">
                <div className="mb-3">
                    <label forHtml="appoinmentno" className="form-label">Appoinment No</label>
                    <input type="number" className="form-control" id="appoinmentno" placeholder="Enter Appoinment No" value={appoinmentno} onChange={(e) => {setAppoinmentNo(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="fullname" className="form-label">Patient Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="Enter Name" value={fullname} onChange={(e) => {setFullName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="doctorname" className="form-label">Doctor Name</label>
                    <select className="form-select" id="doctorname" value={doctorname} onChange={(e) => {setDoctorName(e.target.value)}}>
                        <option value="">Select a doctor</option>
                        <option value="Dr. Shangave">Dr. Shangave</option>
                        <option value="Dr. Ashokan">Dr. Ashokan</option>
                        <option value="Dr. Navashanth">Dr. Navashanth</option>
                        <option value="Dr. Ashendra">Dr. Ashendra</option>
                        <option value="Dr. Thivvi">Dr. Thivvi</option>
                        {/* Add more doctor options as needed */}
                </select>
                </div>
                <div className="mb-3">
                    <label forHtml="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date"  value={date} min={getCurrentDate()} onChange={(e) => {setDate(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label forHtml="time" className="form-label">Time</label>
                    <input type="time" className="form-control" id="time" value={time} onChange={handleTimeChange} />
                </div>
                <div className="mb-3">
                    <label forHtml="location" className="form-label">Location</label>
                    <select className="form-select" id="location" value={location} onChange={(e) =>{setLocation (e.target.value)}}>
                    <option value="">Select a location</option>
                        <option value="Malabe">Malabe</option>
                        <option value="Vavuniya">Vavuniya</option>
                        <option value="Jaffna">Jaffna</option>   
                    </select>
                </div>
                <div className="mb-3">
                    <label forHtml="condition" className="form-label">Condition</label>
                    <textarea type="text" className="form-control" id="condition" placeholder="Enter Condition" value={condition} onChange={(e) => {setCondition(e.target.value)}}/>
                </div>
                <button type="submit" >ADD</button>
            </form>

            
        </div>
    )
}
