import React, { Fragment } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function NavComponent() {
  return (
    <Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavComponent;
