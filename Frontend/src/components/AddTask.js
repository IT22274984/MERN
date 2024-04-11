import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToServer } from "../slices/tasksSlice";
import {useDispatch} from 'react-redux'

const AddTask = () => {

    const dispatch = useDispatch()

    const [customername,setcustomername] = useState('')
    const [email,setemail] = useState('')
    const [topic,settopic] = useState('')
    const [description,setDescription] = useState('')
    const [responce,setResponce] = useState('')
    const [ticketstatus,setStatus] = useState('')


    const addTask = (e) => {
        e.preventDefault()
        console.log({customername,email,topic,description,responce,ticketstatus})
        dispatch(addTaskToServer({customername,email,topic,description,responce,ticketstatus}))
        setcustomername('')
        setemail('')
        settopic('')
        setDescription('')
        setResponce('')
        setStatus('')
    }
  return (
    <section className="my-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
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
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicResponce">
        <Form.Label>Responce</Form.Label>
        <Form.Control type="text"  as="textarea" placeholder="Customer issues responce"  defaultValue="Not yet" 
        value={responce}
        style={{ height: '100px'}} 
        onChange={(e) => setResponce(e.target.value)}/>
      </Form.Group>

      <Form.Select aria-label="Default select example"  controlId="formBasicStatus" >
       <Form.Label>Status</Form.Label>
       <Form.Control  value={ticketstatus}  defaultValue="1" onChange={(e) => setStatus(e.target.value)}/>
        <option value="1">Deliverd</option>
        <option value="2">Viewed</option>
      </Form.Select><br/>

      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
          Submit
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default AddTask;
