// C:\Users\shant\OneDrive\Desktop\sampleProject\sample\client\src\components\AddPrescription\AddPrescription.jsx
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./AddPrescription.css";
  import Header from "../Header/Header"
  
  const AddPrescription = () => {
  
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      Sphere: "",
      Cylinder: "",
      Axis: "",
      PupilDistance: "",
      Lence: "",
      Description: "",
    });
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");


    const handleChange = (e) => {
      const { name, value } = e.target;
  if (name === "Mobilenumber") {
    if (!/^\d{10}$/.test(value)) {
      setError("Please enter a valid 10-digit mobile number.");
    } else {
      setError("");
    }
  }
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const [showMessage, setShowMessage] = useState(false);

  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:4000/prescriptions/upload", {
          Mobilenumber:String(inputs.Mobilenumber),
          Sphere: Number(inputs.Sphere ),
          Cylinder: Number(inputs.Cylinder),
          Axis: Number(inputs.Axis),
          PupilDistance: Number(inputs.PupilDistance),
          Lence: String(inputs.Lence),
          Description: String(inputs.Description),
          available: Boolean(checked),
        })
        .then(() => {
          setShowMessage(true);
        })
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputs.Sphere.trim() === "" || inputs.Cylinder.trim() === "" || inputs.Axis.trim() === "" || inputs.PupilDistance.trim() === "" || inputs.Lence.trim() === "" || inputs.Description.trim() === "") {
        alert("Please fill in all fields");
        return;
      }
      setOpen(true);
    };
    
  
    const handleConfirm = () => {
      sendRequest().then(() => {
        setOpen(false);
        history("/OptometristHome");
      });
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <header>
        <Header/>
       </header>
      <form onSubmit={handleSubmit}>
      {showMessage && <div className="message">Prescription Added</div>}
        <Box className="formContainer">
        <FormLabel>Mobile Number</FormLabel>
          <TextField
            value={inputs.Mobilenumber}
            onChange={handleChange}
            type="string"
            margin="normal"
            fullWidth
            variant="outlined"
            name="Mobilenumber"
          />
          {error && <p className="error">{error}</p>}
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
            className="descriptionTextField"
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
  
          <Button variant="contained" type="submit" className="submitButton">
            Add Prescription
          </Button>
        </Box>
      </form>

<Dialog open={open} onClose={handleClose}>
<DialogTitle>Confirm</DialogTitle>
<DialogContent>
  <DialogContentText>
    Are you sure you want to add this prescription?
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose}>Cancel</Button>
  <Button onClick={handleConfirm}>Confirm</Button>
</DialogActions>
</Dialog>
</div>
    );
  };
  
  export default AddPrescription;
  