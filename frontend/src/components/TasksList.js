import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask'; // Assuming you have an UpdateCard component for updating cards
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCard, removeCardFromList, deleteCardFromServer } from "../slices/tasksSlice";
import { getCardsFromServer } from './../slices/tasksSlice';
import PremiumHeader from './PremiumHeader'; // Import the PremiumHeader component

const CardsList = () => {
  const { cardsList } = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const updateCard = (card) => {
    console.log(card)
    setModalShow(true);
    dispatch(setSelectedCard(card));
  };

  useEffect(() => {
    dispatch(getCardsFromServer());
  }, [dispatch]);

  const deleteCard = (card) => {
    dispatch(deleteCardFromServer(card))
      .unwrap()
      .then(() => {
        dispatch(removeCardFromList(card));
        alert("successfully deleted")
      });
  };

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the cardsList based on the search query
  const filteredCards = cardsList.filter(card =>
    card.holderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.cardType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PremiumHeader /> {/* Include the PremiumHeader component */}

      {/* Search Bar */}
      <Form.Group controlId="search" className="d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Search by Holder Name or Card Type"
          value={searchQuery}
          onChange={handleSearchChange}
          className="mr-2"
          style={{ width: '300px', height: '40px' }} // Adjust width and height as needed
        />
        <Button variant="success">Search</Button>
      </Form.Group>

      {/* Table */}
      <div className="table-container">
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>Card ID</th>
              <th>Card Number</th>
              <th>Holder Name</th>
              <th>Card Type</th>
              <th>CVV</th>
              <th>Expiration Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCards.map((card, index) => (
              <tr className="text-center" key={card._id}>
                <td>{index + 1}</td>
                <td>{card.cardNum}</td>
                <td>{card.holderName}</td>
                <td>{card.cardType}</td>
                <td>{card.cvv}</td>
                <td>{card.exDate}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    className="mx-2"
                    onClick={() => updateCard(card)}
                  >
                    Edit
                  </Button>
                  <Button variant="outline-danger" onClick={() => deleteCard(card)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* Footer */}
      <footer className="premium-footer">
        <p className="premium-footer-text">Manage your cards efficiently with ICare's premium features.</p>
      </footer>
    </>
  );
};

export default CardsList;
