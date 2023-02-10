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
          <i>What books inspire you and broaden your perspective? We would love to know!</i>
        </p>
      </header>
      <section className="books-container">
        <h2>Featured Books</h2>
      </section>
    </div>
  );
}

export default App;
