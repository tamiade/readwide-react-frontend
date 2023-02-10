import { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BookList from './components/BookList';
import Navbar from "./Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
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
      <section className="books-container">
        <h2>Featured Books</h2>
      </section>
    </div>
  );
}

export default App;
