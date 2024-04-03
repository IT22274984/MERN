//PrescriptionDetail.js
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const PrescriptionDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/prescription/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.Prescription));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/prescription/${id}`, {
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
      sendRequest().then(() => history("/prescription"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
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
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />
  
              <Button variant="contained" type="submit">
                Update Prescription
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default PrescriptionDetail;
  