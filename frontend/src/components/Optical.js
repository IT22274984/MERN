import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Optical.css";
import SearchIcon from '@mui/icons-material/Search';

const Optical = (props) => {
  const history = useNavigate();
  const { _id, name, description, price, additional_information, image } = props.optical;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/opticals/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/opticals"));
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
          <Button LinkComponent={Link} to={`/opticals/${_id}`} sx={{ mt: "auto" }}>
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
