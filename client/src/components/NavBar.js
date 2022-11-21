import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">DBMed</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/doctors">Doctors</Nav.Link>
          <Nav.Link href="/records">Records</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
