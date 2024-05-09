import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Prescription.css";
import img from '../../assets/logo.png'

const Prescription = (props) => {
  const history = useNavigate();
  const { _id, Sphere, Cylinder, Axis, PupilDistance, Lence, Description,Mobilenumber } = props.prescription;
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:4000/prescriptions/${_id}`)
      .then(() => {
        setOpen(false);
        history("/prescriptions");
      });
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

      <Button LinkComponent={Link} to={`/prescriptions/${_id}`} sx={{ mt: "auto" }}>
      <strong> Update</strong>
      </Button>
      <Button color="error" onClick={() => setOpen(true)} sx={{ mt: "auto" }}>
      <strong> Delete</strong>
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Prescription</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this prescription?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Prescription;
