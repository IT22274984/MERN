import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToServer } from "../slices/tasksSlice";
import { useDispatch } from 'react-redux'

const AddTask = () => {

    const dispatch = useDispatch()

    const [customername, setCustomerName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const addTask = (e) => {
        e.preventDefault();

        
        if (!customername || !email || !topic || !description) {
            alert('Please fill in all required fields.');
            return;
        }

        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        console.log({ customername, email, topic, description });
        dispatch(addTaskToServer({ customername, email, topic, description }));

        // Reset form fields after submission
        setCustomerName('');
        setEmail('');
        setTopic('');
        setDescription('');
    }

    return (
        <section className="my-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={customername} onChange={(e) => setCustomerName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTopic">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control type="text" placeholder="Enter Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDiscription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" placeholder="Enter issue Description" value={description} style={{ height: '100px' }} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <div className="text-end">
                    <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
                        Submit
                    </Button>
                </div>
            </Form>
        </section>
    );
};

export default AddTask;