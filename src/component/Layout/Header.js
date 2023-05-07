import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar variant="light" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="fw-normal">
            <i class="zmdi zmdi-library"></i> Digi <span>Library</span>
          </Navbar.Brand>
          <Nav className="ms-auto fw-bolder">
            <Nav.Link href="#home">Register</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
