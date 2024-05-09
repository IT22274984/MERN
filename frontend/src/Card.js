import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddCard from "./components/AddCard";
//import TasksList from "./components/TasksList";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import PremiumHeader from './components/PremiumHeader'; // Import the PremiumHeader component

function Card() {
  return (
    <>
      <PremiumHeader /> {/* Include the PremiumHeader component */}
      <Container>
        <Navbar />
        <div className="justify-content-md-center">
          <Row>
            <Col lg="6">
              <AddCard />
              <a href="/cards-list" className="premium-button">Go to cards List</a>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Card;
