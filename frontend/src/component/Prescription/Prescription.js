//Prescription.js
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Prescription.css";
const Prescription = (props) => {
  const history = useNavigate();
  const { _id, Sphere, Cylinder, Axis, PupilDistance, Lence, Description } = props.Prescription;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/prescription/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/prescription"));
  };

  return (
    <div className="card">
      
      <h3>By {Sphere}</h3>
      <h3>{Cylinder}</h3>
      <h3> {Axis}</h3>
      <h3> {PupilDistance}</h3>
      <h3>Rs {Lence}</h3>
      <p>{Description}</p>
      
      <Button LinkComponent={Link} to={`/prescription/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Prescription;
