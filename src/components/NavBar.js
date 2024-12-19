import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar( {isHome} ) {
  return (
    <Navbar bg="light" variant="light" expand="lg" style={{ borderBottom: '2px solid #A0EFEE' }}>
      <Container>
        <Navbar.Brand as={Link} to="/"> CIS 160 Puzzle Hunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isHome && <Nav.Link as={Link} to="/"> Return to Home </Nav.Link>}
            {/* <Nav.Link as={Link} to="/alphabet"> </Nav.Link> */}
            {/* <Nav.Link as={Link} to="/dashboard">Court Heatmaps</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/distributions">Shot Graphs</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
