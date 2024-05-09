import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Optical.css";

const Optical = (props) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    description,
    price,
    additional_information,
    availableQuantity,
    image,
    generateReport, // Received as prop
  } = props.optical;

  const deleteHandler = async () => {
    // Delete logic here : TODO
  };

  return (
    <div className="optical-container">
      <div className="card">
        <Link to={`/view`}>
          <img src={image} alt={name} />
        </Link>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Rs {price}</h3>
        <h3>Available: {availableQuantity}</h3>
        <p>{additional_information}</p>
        <div className="button-container">
          <Button
            component={Link}
            to={`/opticals/${_id}`}
            variant="contained"
          >
            Update
          </Button>
          <Button onClick={deleteHandler} variant="contained" color="error">
            Delete
          </Button>
        </div>
      </div>
      {/* Remove the individual "Generate Report" button */}
    </div>
  );
};

export default Optical;
