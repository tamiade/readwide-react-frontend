import { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import BookList from './components/BookList';
import RegisterBookForm from "./RegisterBookForm";

function App() {

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get("https://readwide-spring-api.herokuapp.com/books")
      .then((response) => {
        setBookData(response.data);
      });
  }, []);

  return (
    <body className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/registerbook" element={<RegisterBookForm />} />
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
        <BookList books={bookData} />
      </main>
    </body>
  );
}

export default App;
