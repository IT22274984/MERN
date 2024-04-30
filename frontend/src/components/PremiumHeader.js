import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const PremiumHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"> {/* Add expand="lg" to make it large */}
      <Navbar.Brand href="#home">ICare</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/card">Add_Card</Nav.Link>
          <Nav.Link href="/payment">Pay_Page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PremiumHeader;
