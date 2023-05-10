import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = ({ currentUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Navbar variant="light" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="fw-normal">
            <i className="zmdi zmdi-library"></i> Digi <span>Library</span>
          </Navbar.Brand>
          <Nav className="ms-auto fw-bolder">
            {currentUser?._id ? (
              <>
                <div className="message d-flex align-items-center">
                  Welcome!{currentUser.fName}
                </div>

                <Button
                  className=" btn-logout align-items-center"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
