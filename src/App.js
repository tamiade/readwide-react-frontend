import { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import BookList from './components/BookList';

function App() {
  return (
    <body className="App">
      <header className="App-header">
        <p>
          <i>Tell us about books that inspire you and broaden your perspective ↖️</i>
        </p>
        <p>
          <i>Discover books by authors from silenced communities ↙️</i>
        </p>
      </header>
      <main>
        <BookList />
      </main>
    </body>
  );
}

export default App;
