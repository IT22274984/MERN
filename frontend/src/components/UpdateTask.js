import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateTaskInServer } from "./../slices/tasksSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Form from "react-bootstrap/Form";

const MyVerticallyCenteredModal = (props) => {
  const { selectedTask } = useSelector((state) => state.tasks);

  const [customername, setcustomername] = useState("");
  const [email, setemail] = useState("");
  const [topic, settopic] = useState("");
  const [description, setDescription] = useState("");
  const [responce, setResponce] = useState("");
  const [ticketstatus, setStatus] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const updateTask = () => {
    props.onHide();
    dispatch(
      updateTaskInServer({
        _id: id,
        customername,
        email,
        topic,
        description,
        responce,
        ticketstatus,
      })
    );
  };

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setcustomername(selectedTask.customername);
      setemail(selectedTask.email);
      settopic(selectedTask.topic);
      setDescription(selectedTask.description);
      setResponce(selectedTask.responce);
      setStatus(selectedTask.ticketstatus);
      setId(selectedTask._id);
    }
  }, [selectedTask]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const options = ["Delivered", "Viewed", "Responded"];

  return (
    <Modal
      open={props.show}
      onClose={props.onHide}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          Response to E-ticket
        </Typography>

        <Form.Group className="mb-3" controlId="formBasicResponce">
          <Form.Label>Response</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Customer issues response"
            // defaultValue="Not yet"
            value={responce}
            style={{ height: '100px' }}
            onChange={(e) => setResponce(e.target.value)}
          />
        </Form.Group>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Status of the E-ticket
        </Typography>
        <Dropdown
          options={options}
          onChange={(option) => setStatus(option.value)} // Update ticketstatus state with the selected option value
          value={ticketstatus}
          placeholder="Select an option"
        /><br />

        <div className="text-end">
          <Button variant="primary" type="submit" onClick={updateTask}>
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
