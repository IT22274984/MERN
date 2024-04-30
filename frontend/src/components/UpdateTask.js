import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { updateCardInServer } from "./../slices/tasksSlice";

const MyVerticallyCenteredModal = (props) => {
  const [cardNum, setCardNum] = useState("");
  const [holderName, setHolderName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cvv, setCvv] = useState("");
  const [exDate, setExDate] = useState("");
  const [id, setId] = useState(0);
  const [errors, setErrors] = useState({
    cardNum: "",
    cvv: "",
    exDate: "",
  });

  const selectedCard = useSelector((state) => state.cards.selectedCard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCard) {
      setCardNum(selectedCard.cardNum || "");
      setHolderName(selectedCard.holderName || "");
      setCardType(selectedCard.cardType || "");
      setCvv(selectedCard.cvv || "");
      setExDate(selectedCard.exDate || "");
      setId(selectedCard._id || 0);
    }
  }, [selectedCard]);

  const updateCard = () => {

    // Reset errors
    setErrors({
      cardNum: "",
      cvv: "",
      exDate: "",
    });

    // Card number validation
    if (cardNum.toString().length !== 16 || isNaN(cardNum)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNum: "Card number must be exactly 16 digits",
      }));
      return;
    }

    // CVV validation
    if (cvv.toString().length !== 3 || isNaN(cvv)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvv: "CVV must be exactly 3 digits",
      }));
      return;
    }

    // Expiration date validation
    const today = new Date();
    const expirationDate = new Date(exDate);
    if (expirationDate <= today) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        exDate: "Expiration date must be a future date",
      }));
      return;
    }

    // Update card in server
    dispatch(
      updateCardInServer({
        _id: id,
        cardNum: cardNum,
        holderName: holderName,
        cardType: cardType,
        cvv: cvv,
        exDate: exDate,
      })
    );
    // Close modal
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formCardNum">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Card Number"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
            />
            {errors.cardNum && (
              <Form.Text className="text-danger">{errors.cardNum}</Form.Text>
            )}
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
              <option value="">Update Card Type</option>
              <option value="visa">Visa</option>
              <option value="master">Master</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            {errors.cvv && (
              <Form.Text className="text-danger">{errors.cvv}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Expiration Date"
              value={exDate}
              onChange={(e) => setExDate(e.target.value)}
            />
            {errors.exDate && (
              <Form.Text className="text-danger">{errors.exDate}</Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button variant="success" onClick={updateCard}>
            Update Card
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
