import { useState, useEffect } from "react";
import axios from 'axios';
import Book from './Book';

const BookList = () => {
  return (
    <section className="books-container">
      <h2>Featured Books</h2>
      <div className="books-grid">
        Render modified book component with only thumbnail, title, and author fields
      </div>
    </section>
  );
}

export default BookList;
