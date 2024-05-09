import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import Header from "../Header/Header";
//import "./PrescriptionDetail.css";
import Footermain from "../Header/FooterMain";

const PrescriptionDetail = () => {
  const [inputs, setInputs] = useState(null);
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useNavigate();

  useEffect(() => {
    const fetchPrescription = async () => {
      const response = await axios.get(`http://localhost:4000/prescriptions/${id}`);
      setInputs(response.data.prescription);
    };
    fetchPrescription();
  }, [id]);

  const handleUpdate = () => {
    if (validateInputs()) {
      setOpen(true);
    }
  };

  const confirmUpdate = async () => {
    await axios.put(`http://localhost:4000/prescriptions/${id}`, {
      ...inputs,
      available: checked,
    });
    setOpen(false);
    history("/prescriptions");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    let newErrors = {};
    if (!inputs.Sphere || isNaN(inputs.Sphere)) {
      newErrors.Sphere = "Sphere value is required and must be a number";
    }
if (!inputs.Cylinder || isNaN(inputs.Cylinder)) {
      newErrors.Cylinder = "Cylinder value is required and must be a number";
    }
if (!inputs.Axis || isNaN(inputs.Axis)) {
      newErrors.Axis = "Axis value is required and must be a number";
    }
if (!inputs.PupilDistance || isNaN(inputs.PupilDistance)) {
      newErrors.PupilDistance = "PupilDistance value is required and must be a number";
    }


    // Add validations for other fields
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      {inputs && (
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <Box className="formContainer">
            <FormLabel>Sphere</FormLabel>
            <TextField
              value={inputs.Sphere}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="Sphere"
              className="customTextField"
              error={!!errors.Sphere}
              helperText={errors.Sphere}
            />
           <FormLabel>Cylinder</FormLabel>
            <TextField
              value={inputs.Cylinder}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="Cylinder"
              className="customTextField"
              error={!!errors.Cylinder}
              helperText={errors.Cylinder}
            />
            <FormLabel>Axis</FormLabel>
            <TextField
              value={inputs.Axis}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="Axis"
              className="customTextField"
              error={!!errors.Axis}
              helperText={errors.Axis}
            />
            <FormLabel>PupilDistance</FormLabel>
            <TextField
              value={inputs.PupilDistance}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="PupilDistance"
              className="customTextField"
              error={!!errors.PupilDistance}
              helperText={errors.PupilDistance}
            />
            <FormLabel>Lence</FormLabel>
            <TextField
              value={inputs.Lence}
              onChange={handleChange}
              type="string"
              margin="normal"
              fullWidth
              variant="outlined"
              name="Lence"
              className="customTextField"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.Description}
              onChange={handleChange}
              type="string"
              margin="normal"
              fullWidth
              variant="outlined"
              name="Description"
              className="customTextField"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="CONFIRM"
              className="checkbox"
            />
            <Button
              variant="contained"
              onClick={handleUpdate}
              className="submitButton"
            >
              Update Prescription
            </Button>
          </Box>
        </form>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to update this prescription?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={confirmUpdate} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>

      <footer>
       <Footermain/>
      </footer>


    </div>
  );
};

export default PrescriptionDetail;
