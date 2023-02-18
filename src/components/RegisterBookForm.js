import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import BookList from "./BookList";
import BookImage from "../resources/defaultImage.png"

const RegisterBookForm = ({ onBookRegistered }) => {
  
  const [formFields, setFormFields] = useState({
    title: "",
    author: "",
  });
  
  const [googleBookData, setGoogleBookData] = useState([]);

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const registerBook = (book) => {
    axios
      .post("https://readwide-spring-api.herokuapp.com/books", book)
      .then((response) => {
        console.log("Book created!");
        alert("Added Book!")
        onBookRegistered();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new book.");
      });
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    callGoogleBooksApi();
  };
  
  const transformGoogleBookToClientBook = (googleBookData) => {
    let clientBooks = [];
    for (let googleBook of googleBookData) {
      let bookThumbnail = googleBook.volumeInfo.hasOwnProperty("imageLinks")
        ? googleBook.volumeInfo.imageLinks.thumbnail
        : BookImage;
      let bookDescription = googleBook.volumeInfo.hasOwnProperty("description")
        ? googleBook.volumeInfo.description.substring(0, 250)
        : "";
      if (
        googleBook.volumeInfo.hasOwnProperty("description") &&
        googleBook.volumeInfo.description.length > 250
      ) {
        bookDescription += "...";
      }
      let clientBook = {
        thumbnail: bookThumbnail,
        title: googleBook.volumeInfo.title,
        author: googleBook.volumeInfo.authors[0],
        description: bookDescription,
      };
      clientBooks.push(clientBook);
    }
    return clientBooks;
  };
  
  const callGoogleBooksApi = () => {
    console.log("Form data:", formFields);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: formFields.title,
          format: "json",
        },
      })
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        if (response.data.items.length === 0) {
          alert("No books found!");
          return;
        }
        let clientBookData = transformGoogleBookToClientBook(
          response.data.items
        );
        setGoogleBookData(clientBookData);
      })
      .catch((error) => {
        console.log("Error submitting form:", error.response.data.message);
      });
  };

  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Form.Group
          as={Row}
          className="mb-3 py-5 mt-5"
          controlId="formHorizontalTitle"
        >
          <Form.Label column sm={1}>
            Keywords
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={formFields.title}
              onChange={onTitleChange}
              placeholder="Enter book search terms"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 20, offset: -10 }}>
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <BookList
        books={googleBookData}
        bookListLabel="Retrieved books"
        onBookClick={registerBook}
      />
    </div>
  );
};

export default RegisterBookForm;
