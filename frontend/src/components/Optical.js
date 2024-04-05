import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Optical.css";
import SearchIcon from '@mui/icons-material/Search';

const Optical = (props) => {
  const navigate = useNavigate(); // Renamed history to navigate
  const { _id, name, description, price, additional_information, image } = props.optical;

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/opticals/${_id}`);
      navigate("/opticals"); // Navigate to the /opticals route after deletion
    } catch (error) {
      console.error("Error deleting optical:", error);
    }
  };

  return (
    <div className="optical-container">
      <div className="search-bar">
        <div className="search-icon">
          <SearchIcon/>
        </div>
        {/* Add your search bar component here */}
        <TextField label="Search" variant="outlined" />
      </div>
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Rs {price}</h3>
        <p>{additional_information}</p>
        <div className="button-container">
          <Button component={Link} to={`/opticals/${_id}`} sx={{ mt: "auto" }}>
            Update
          </Button>
          <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Optical;
