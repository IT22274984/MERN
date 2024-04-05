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

const OpticalDetail = () => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    additional_information: "",
  });
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/opticals/${id}`);
        const opticalData = data.optical;
        // Convert price to a number
        opticalData.price = parseFloat(opticalData.price);
        setInputs(opticalData);
        setChecked(opticalData.available);
      } catch (error) {
        console.error("Error fetching optical details:", error);
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    try {
      await axios.put(`http://localhost:5000/opticals/${id}`, {
        ...inputs,
        available: checked,
      });
      history("/opticals");
    } catch (error) {
      console.error("Error updating optical:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={sendRequest}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            maxWidth={700}
            marginX="auto"
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Additional Information</FormLabel>
            <TextField
              value={inputs.additional_information}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="additional_information"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              }
              label="Available"
            />
            <Button variant="contained" type="submit">
              Update Optical
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default OpticalDetail;
