import ReflectionList from "./ReflectionList.js";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import "./BookDetails.css";

const BookDetails = ({ book, reflections, onBookChange, onBackClick }) => {
  
  const [formFields, setFormFields] = useState({
    user: "",
    reflection: "",
  });

  const onBackButtonClick = (event) => {
    onBackClick();
  };

  const loadReflections = (bookId) => {
    axios
      .get(
        "https://readwide-spring-api.herokuapp.com/reflections/get/" + bookId
      )
      .then((response) => {
        let newBook = book;
        newBook.reflection = response.data;
        onBookChange(newBook);
      });
  };

  const onPublishReflection = (event) => {
    event.preventDefault();
    console.log("Post reflection");
    axios
      .post("https://readwide-spring-api.herokuapp.com/reflections/add", {
        reflection: formFields.reflection,
        submittedBy: formFields.user,
        bookId: book.id,
      })
      .then((response) => {
        loadReflections(book.id);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't add reflection.");
      });
  };

  const onReflectionChange = (event) => {
    setFormFields({
      ...formFields,
      reflection: event.target.value,
    });
  };

  const onUserChange = (event) => {
    setFormFields({
      ...formFields,
      user: event.target.value,
    });
  };

  return (
    <section className="book-view">
      <ul className="book-display">
        <li className="book-elements">
          <Button variant="outline-dark" onClick={onBackButtonClick}>
            Back
          </Button>
        </li>
        <li>Title: {book.title}</li>
        <li className="book-elements">
          <img src={book.thumbnail} alt="Book cover"></img>
        </li>
        <li>Author: {book.author}</li>
        <li>Description: {book.description}</li>
        <li>
          <Form onSubmit={onPublishReflection}>
            <Form.Group
              as={Row}
              className="mb-3 py-5 mt-5"
              controlId="formHorizontalTitle"
            >
              <Form.Label column sm={1}>
                User
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={formFields.user}
                  onChange={onUserChange}
                  placeholder="Enter user"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalAuthor"
            >
              <Form.Label column sm={1}>
                Reflection
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={formFields.reflection}
                  onChange={onReflectionChange}
                  placeholder="Enter your reflection"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 20, offset: -10 }}>
                <Button variant="outline-dark" type="submit">
                  Add Reflection
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </li>
        <li>
          <ReflectionList reflections={reflections}></ReflectionList>
        </li>
      </ul>
    </section>
  );
};

export default BookDetails;
