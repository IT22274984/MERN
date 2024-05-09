import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/opticals/${id}`);
        const opticalData = data.optical;
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
      // Validate available quantity
      console.log("Available Quantity:", inputs.availableQuantity);
      if (parseInt(inputs.availableQuantity) < 200) {
        console.log("Validation Failed: Available quantity must be at least 200.");
        toast.error("Available quantity must be at least 200.", {
          position: "top-center",
          autoClose: 50000 // 30 seconds in milliseconds
        });
        
        return; // Exit function if validation fails
      }
  
      // If validation passes, proceed with the request
      await axios.put(`http://localhost:4000/opticals/${id}`, {
        ...inputs,
        available: checked,
      });
      toast.success("Optical updated successfully!", {
        position: "top-center",
        autoClose: 50000 // 30 seconds in milliseconds
      });
      
    } catch (error) {
      console.error("Error updating optical:", error);
      toast.error("Error updating optical. Please try again.", {
        position: "top-center"
      });
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
    <ToastContainer position="top-center" /> {/* Set position to top-center */}

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
            <FormLabel>Available Quantity</FormLabel>
            <TextField
            value={inputs.availableQuantity}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="availableQuantity"
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
    </div>
  );
};

export default OpticalDetail;
