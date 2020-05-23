import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import './NavBar.css';

const NavBar = () => {
  return (
    <Container>
      <Navbar className="bg-custom" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="gerdau-forms-navbar">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mobileequipmentinspection">
              Mobile Equipment Inspection
            </Nav.Link>
            <Nav.Link href="/tapemeasurerecord">Tape Measure Record</Nav.Link>
            <Nav.Link href="/craneinspection">Crane Pre-Inspection</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
