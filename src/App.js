import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import RegisterBookForm from "./components/RegisterBookForm";
import BookDetails from "./components/BookDetails";

function App() {
  const [bookData, setBookData] = useState([]);
  const [showRegisterBook, setShowRegisterBook] = useState(false);
  const [showBookDetailView, setShowBookDetailView] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [reflections, setReflections] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios
      .get("https://readwide-spring-api.herokuapp.com/books")
      .then((response) => {
        showBooksWithFilter(response.data);
      });
  }, []);
  
  const refreshBookList = () => {
    axios
      .get("https://readwide-spring-api.herokuapp.com/books")
      .then((response) => {
        setBookData(response.data);
        toggleRegisterBook();
      });
  };
  
  const toggleRegisterBook = () => {
    setShowRegisterBook(!showRegisterBook);
  };
  
  const displayBookDetails = (book) => {
    changeSelectedBook(book);
    setShowBookDetailView(true);
  };
  
  const hideDisplayDetails = () => {
    setShowBookDetailView(false);
  };

  const changeSelectedBook = (book) => {
    setSelectedBook(book);
    setReflections(book.reflection);
  };
  
  const showBooksWithFilter = (books, filter) => {
    for (let key in books) {
      let book = books[key];
      if (filter === undefined || filter === "") {
        book.visible = true;
      } else {
        book.visible = book.title.includes(filter);
      }
    }
    setBookData(books);
  };
  
  const onFilterBooks = (filterVal) => {
    setFilterValue(filterVal);
    showBooksWithFilter(bookData, filterVal);
  };
  
  return (
    <body className="App">
      <Navbar
        toggleRegisterBook={toggleRegisterBook}
        onFilter={onFilterBooks}
        filterValue={filterValue}
        isRegistering={showRegisterBook}
      />
      <Routes>
        <Route exact path="/" component={App} />
        {/* <Route path="/search" component={FindBooksForm} /> */}
      </Routes>
      <header className="App-header">
        <p>
          <i>
            Tell us about books that inspire you and broaden your perspective ↖️
          </i>
        </p>
        <p>
          <i>Discover books by authors from silenced communities ↙️</i>
        </p>
      </header>
      <main>
        {!showRegisterBook && showBookDetailView ? (
          <BookDetails
            book={selectedBook}
            reflections={reflections}
            onBookChange={changeSelectedBook}
            onBackClick={hideDisplayDetails}
          ></BookDetails>
        ) : null}
        {showRegisterBook ? (
          <RegisterBookForm onBookRegistered={refreshBookList} />
        ) : null}
        {showRegisterBook || showBookDetailView ? null : (
          <BookList
            books={bookData}
            bookListLabel="Registered Books"
            onBookClick={displayBookDetails}
          />
        )}
      </main>
    </body>
  );
}

export default App;
