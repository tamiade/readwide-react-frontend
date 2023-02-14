import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from 'react';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = ({toggleRegisterBook}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const renameSearch = (changeEvent) => {
    setSearchTerm(changeEvent.target.value);
  };
  const onRegisterBookClick = () => 
  {
    toggleRegisterBook();
  }
  
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="mb-0 h1 fs-2">📖 ReadWide</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={onRegisterBookClick} className="h5 my-auto">
              Register Book
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              value={searchTerm}
              placeholder="Search by Title or Author"
              onChange={renameSearch}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Find Books</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
