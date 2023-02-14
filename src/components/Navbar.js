import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = ({ toggleRegisterBook, onFilter, filterValue, isRegistering }) => {
  
  const renameSearch = (changeEvent) => {
    onFilter(changeEvent.target.value);
  };
  
  const onRegisterBookClick = (event) => {
    toggleRegisterBook();
  };

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
              {isRegistering ? "Bookshelf" : "Register Book"}
            </Nav.Link>            
          </Nav>
          <Form className="d-flex">
            {isRegistering ? null : (
              <Form.Control
                type="search"
                value={filterValue}
                placeholder="🔍 Search books"
                onChange={renameSearch}
                className="me-2"
                aria-label="Search"
              />
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
