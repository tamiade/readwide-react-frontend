import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import axios from "axios";

function RegisterBookForm() {

  const [formFields, setFormFields] = useState({
    title: "",
    author: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onAuthorChange = (event) => {
    setFormFields({
      ...formFields,
      author: event.target.value,
    });
  };
  const registerBook = (book) => {
      axios
        .post("https://readwide-spring-api.herokuapp.com/books",  book)
        .then((response) => {
          console.log("Book created!");
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Couldn't create a new book.");
        });
  }
  const onFormSubmit = (event) => {
        event.preventDefault();

        let receivedData = callGoogleBooksApi();

        setFormFields({
            name: '',
            email: '',
        });
    };


  const callGoogleBooksApi = () => {
    console.log("Form data:", formFields);
    axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: formFields.title,
            format: "json",
          },
        })
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          const receivedData = {
            thumbnail:
              response.data.items[0].volumeInfo.imageLinks.smallThumbnail,
            title: response.data.items[0].volumeInfo.title,
            author: response.data.items[0].volumeInfo.authors[0],
            description:
              response.data.items[0].description === undefined
                ? ""
                : response.data.items[0].description,
          };
          registerBook(receivedData)
      })
      .catch((error) => {
        console.log("Error submitting form:", error.response.data.message);
    })
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group
        as={Row}
        className="mb-3 py-5 mt-5"
        controlId="formHorizontalTitle"
      >
        <Form.Label column sm={1}>
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            value={formFields.title}
            onChange={onTitleChange}
            placeholder="Enter book title"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalAuthor">
        <Form.Label column sm={1}>
          Author
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            value={formFields.author}
            onChange={onAuthorChange}
            placeholder="Enter book author"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 20, offset: -10 }}>
          <Button variant="outline-dark" type="submit">
            Add Book
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default RegisterBookForm;
