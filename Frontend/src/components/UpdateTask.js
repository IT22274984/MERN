import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { updateTaskInServer } from './../slices/tasksSlice';

const MyVerticallyCenteredModal = (props) => {
  const { selectedTask } = useSelector((state) => state.tasks);

  const [customername,setcustomername] = useState("")
  const [email,setemail] = useState("")
  const [topic,settopic] = useState("")
  const [description,setDescription] = useState("")
  const [responce,setResponce] = useState("")
  const [ticketstatus,setStatus] = useState(" ")
  const [id, setId] = useState(0);
  const dispatch = useDispatch()

  const updateTask = () => {
    props.onHide();
    dispatch(updateTaskInServer({_id:id,customername,email,topic,description,responce,ticketstatus}))
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Responce to E-Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={customername}
         onChange={(e) => setcustomername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email address" value={email}
        onChange={(e) => setemail(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicTopic">
        <Form.Label>Topic</Form.Label>
        <Form.Control type="text" placeholder="Enter Topic" value={topic}
        onChange={(e) => settopic(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicDiscription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"  as="textarea" placeholder="Enter issue Description" value={description}
        
        style={{ height: '100px'}}
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicResponce">
        <Form.Label>Responce</Form.Label>
        <Form.Control type="text"  as="textarea" placeholder="CUstomer issues responce" value={responce}
        style={{ height: '100px'}}
        onChange={(e) => setResponce(e.target.value)}/>
      </Form.Group>

      <Form.Select aria-label="Default select example" defaultValue="1" controlId="formBasicStatus" >
      <option>Status</option>
      <option value="1">Deliverd</option>
      <option value="2">Resolved</option>
      <Form.Control  value={responce}  onChange={(e) => setStatus(e.target.value)}/>
    </Form.Select><br/>

    </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => updateTask(e)}
          >
            Update Task
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
