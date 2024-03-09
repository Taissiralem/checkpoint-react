import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
// import Heading from "react-bootstrap/Heading";

export default function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navv">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/logo512.png" />
        <Card.Body>
          <Card.Title>Card </Card.Title>
          <Card.Text>this card is an example</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Stack direction="horizontal" gap={2}>
        <Badge bg="primary">Primary</Badge>
        <Badge bg="secondary">Secondary</Badge>
        <Badge bg="success">Success</Badge>
        <Badge bg="danger">Danger</Badge>
        <Badge bg="warning" text="dark">
          Warning
        </Badge>

        <Badge bg="dark">Dark</Badge>
      </Stack>
    </>
  );
}
