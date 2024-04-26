import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Prescription.css";

const Prescription = (props) => {
  const history = useNavigate();
  const { _id, Sphere, Cylinder, Axis, PupilDistance, Lence, Description } = props.prescription;
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:8080/prescriptions/${_id}`)
      .then(() => {
        setOpen(false);
        history("/prescriptions");
      });
  };

  return (
    <div className="card">
      <p><strong>Sphere:</strong> {Sphere}</p>
      <p><strong>Cylinder:</strong> {Cylinder}</p>
      <p><strong>Axis:</strong> {Axis}</p>
      <p><strong>PupilDistance:</strong> {PupilDistance}</p>
      <p><strong>Lence:</strong> {Lence}</p>
      <p><strong>Description:</strong> {Description}</p>
      <p></p>

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
