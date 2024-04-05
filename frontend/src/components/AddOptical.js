import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddOptical = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    additional_information: "",
    image: "",
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
      const response = await axios.post("http://localhost:5000/opticals", {
        name: String(inputs.name),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        additional_information: String(inputs.additional_information),
        available: Boolean(checked),
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs, checked);
      await sendRequest();
      history("/opticals"); // Use history as a function to navigate
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={700}
        alignContent="center"
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
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
          control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
          label="Available"
        />
        <Button variant="contained" type="submit">
          Add Optical
        </Button>
      </Box>
    </form>
  );
};

export default AddOptical;
