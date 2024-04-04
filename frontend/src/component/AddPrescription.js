//AddPrescription.js
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
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
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/prescriptions", {
          Sphere: Number(inputs.Sphere),
          Cylinder: Number(inputs.Cylinder),
          Axis: Number(inputs.Axis),
          PupilDistance: Number(inputs.PupilDistance),
          Lence: String(inputs.Lence),
          Description: String(inputs.Description),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/prescriptions"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Sphere</FormLabel>
          <TextField
            value={inputs.Sphere}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="Sphere"
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
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          />
  
          <Button variant="contained" type="submit">
            Add Prescription
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddPrescription;
  