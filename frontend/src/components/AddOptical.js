import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

const AddOptical = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    additional_information: "",
    image: "",
    availableQuantity: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:4000/opticals", {
        name: String(inputs.name),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        additional_information: String(inputs.additional_information),
        available: Boolean(checked),
        availableQuantity: parseInt(inputs.availableQuantity),
      });
      alert("Optical successfully added");
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Basic validation
      if (!inputs.name || !inputs.description || !inputs.price || !inputs.image || !inputs.availableQuantity) {
        alert("Please fill in all required fields.");
        return;
      }
      if (isNaN(Number(inputs.price)) || isNaN(Number(inputs.availableQuantity))) {
        alert("Price and Available Quantity must be numeric values.");
        return;
      }
      
      // Custom validation for available quantity
      if (parseInt(inputs.availableQuantity) < 200) {
        alert("Available quantity must be at least 200.");
        return;
      }
      
      const addedOptical = await sendRequest();
      
      // Check if available quantity is less than 10
      if (addedOptical.availableQuantity < 10) {
        const message = `Product "${addedOptical.name}" has a low quantity (${addedOptical.availableQuantity}). Please check.`;
        alert(message);
      }
    
      history("/opticals"); // Use history as a function to navigate
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={600}
        margin="auto"
        padding={4}
        boxShadow={3}
        borderRadius={8}
        bgcolor="white"
      >
        <Typography variant="h4" style={{ fontWeight: 700, fontFamily: 'Arial, sans-serif' }}>Add New Optical</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Name"
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <TextField
            label="Description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          <TextField
            label="Price"
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <TextField
            label="Additional Information"
            value={inputs.additional_information}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="additional_information"
          />
          <TextField
            label="Image URL"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <TextField
            label="Available Quantity"
            value={inputs.availableQuantity}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="availableQuantity"
          />
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
            label="Available"
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: 20, width: "100%" }}
            color="primary"
          >
          
            Add Optical
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddOptical;
