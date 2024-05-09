import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addCardToServer } from "../slices/tasksSlice";
import { useDispatch } from 'react-redux';
import "./AddTask.css";

const AddCardForm = () => {
    const dispatch = useDispatch();
    
    const [cardNum, setCardNum] = useState('');
    const [holderName, setHolderName] = useState('');
    const [cardType, setCardType] = useState('');
    const [exDate, setExDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({
        cardNum: '',
        cvv: '',
        exDate: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({
            cardNum: '',
            cvv: '',
            exDate: ''
        });

        if (cardNum.trim().length !== 16 || isNaN(cardNum.trim())) {
            setErrors(prevErrors => ({ ...prevErrors, cardNum: 'Card number must be exactly 16 digits' }));
            return;
        }

        if (cvv.trim().length !== 3 || isNaN(cvv.trim())) {
            setErrors(prevErrors => ({ ...prevErrors, cvv: 'CVV must be exactly 3 digits' }));
            return;
        }

        const today = new Date();
        const expirationDate = new Date(exDate);
        if (expirationDate <= today) {
            setErrors(prevErrors => ({ ...prevErrors, exDate: 'Expiration date must be a future date' }));
            return;
        }

        console.log({ cardNum, holderName, cardType, exDate, cvv });
        dispatch(addCardToServer({ cardNum, holderName, cardType, exDate, cvv }));

        // Clear form fields
        setCardNum('');
        setHolderName('');
        setCardType('');
        setExDate('');
        setCvv('');
        alert("Successfully Created")
    };

    return (
        
        <section className="my-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCardNum">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Card Number"
                        value={cardNum}
                        onChange={(e) => setCardNum(e.target.value)}
                    />
                    {errors.cardNum && <Form.Text className="text-danger">{errors.cardNum}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formHolderName">
                    <Form.Label>Card Holder Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Holder Name"
                        value={holderName}
                        onChange={(e) => setHolderName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCardType">
                    <Form.Label>Card Type</Form.Label>
                    <Form.Control
                        as="select"
                        value={cardType}
                        onChange={(e) => setCardType(e.target.value)}
                    >
                        <option value=""> Select Card Type </option>
                        <option value="visa">Visa</option>
                        <option value="master">Master</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formExDate">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Enter Expiration Date"
                        value={exDate}
                        onChange={(e) => setExDate(e.target.value)}
                    />
                    {errors.exDate && <Form.Text className="text-danger">{errors.exDate}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                    />
                    {errors.cvv && <Form.Text className="text-danger">{errors.cvv}</Form.Text>}
                </Form.Group>

                <div className="text-end">
                    <Button variant="primary" type="submit">
                        Add Card
                    </Button>
                </div>
                
            </Form>
        </section>
    );
};

export default AddCardForm;