import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addCardToServer } from "../slices/cardSlices";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./AddTask.css"; // Import your custom CSS file
import card from './card.png';

const AddCardForm = () => {
    const dispatch = useDispatch();
    
    const { error } = useSelector((state) => state.cards);

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

        dispatch(addCardToServer({ cardNum, holderName, cardType, exDate, cvv }));

        setCardNum('');
        setHolderName('');
        setCardType('');
        setExDate('');
        setCvv('');
        alert("Successfully Created");
    };

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <section className="my-5 card-form-container_pay">
                            <div className="card-img-container_pay">
                                <img src={card} alt="card" className="card-image_pay" />
                                <Form onSubmit={handleSubmit} className="card-form_pay">
                                    <Form.Group className="mb-3" controlId="formCardNum">
                                        <Form.Label className="form-label_pay">Card Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Card Number"
                                            value={cardNum}
                                            onChange={(e) => setCardNum(e.target.value)}
                                        />
                                        {errors.cardNum && <Form.Text className="error-message_pay">{errors.cardNum}</Form.Text>}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formHolderName">
                                        <Form.Label className="form-label_pay">Card Holder Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Holder Name"
                                            value={holderName}
                                            onChange={(e) => setHolderName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formCardType">
                                        <Form.Label className="form-label_pay">Card Type</Form.Label>
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
                                        <Form.Label className="form-label_pay">Expiration Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Enter Expiration Date"
                                            value={exDate}
                                            onChange={(e) => setExDate(e.target.value)}
                                        />
                                        {errors.exDate && <Form.Text className="error-message_pay">{errors.exDate}</Form.Text>}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formCvv">
                                        <Form.Label className="form-label_pay">CVV</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter CVV"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
                                        {errors.cvv && <Form.Text className="error-message_pay">{errors.cvv}</Form.Text>}
                                    </Form.Group>

                                    <div className="text-end">
                                        <Button variant="primary" type="submit">
                                            Add Card
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </section>
                        {error !== '' && <h5 className="text-center text-danger">{error}</h5>}
                        <a href="/cards-list" className="premium-button_pay">Go to cards List</a>
                    </Col>
                </Row>

            </Container>
             
        </>
    );
};

export default AddCardForm;