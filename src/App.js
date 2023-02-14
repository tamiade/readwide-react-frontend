import { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import BookList from './components/BookList';
import RegisterBookForm from "./RegisterBookForm";
import BookDetails from './components/BookDetails';

function App() {

  const [bookData, setBookData] = useState([]);
  const [showRegisterBook, setShowRegisterBook] = useState(false);
  const [showBookDetailView, setShowBookDetailView] = useState(false); 
  const [selectedBook, setSelectedBook] = useState({}); 

  useEffect(() => {
    axios
      .get("https://readwide-spring-api.herokuapp.com/books")
      .then((response) => {
        setBookData(response.data);
      });
  }, []);
  const refreshBookList = () => 
  {
    axios
      .get("https://readwide-spring-api.herokuapp.com/books")
      .then((response) => {
        setBookData(response.data);
      });
  };
  const toggleRegisterBook = () => {
    let newShowRegisterBook = !showRegisterBook;
    setShowRegisterBook(newShowRegisterBook);
  }
  const displayBookDetails = (book) => {
      setSelectedBook(book);
      setShowBookDetailView(true);
  }
  const hideDisplayDetails = () => {
    setShowBookDetailView(false);
  }
  
  const changeSelectedBook = (book) => {
      setSelectedBook(book);
  }

  return (
    <body className="App">
      <Navbar toggleRegisterBook={toggleRegisterBook} />
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
        {showBookDetailView ? (
          <BookDetails
            book={selectedBook}
            onBookChange={changeSelectedBook}
            onBackClick={hideDisplayDetails}
          ></BookDetails>
        ) : null}
        {showRegisterBook && !showBookDetailView ? (
          <RegisterBookForm onBookRegistered={refreshBookList} />
        ) : null}
        {showBookDetailView ? null : (
          <BookList books={bookData} onBookClick={displayBookDetails} />
        )}
      </main>
    </body>
  );
}

export default App;
