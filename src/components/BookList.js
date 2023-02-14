import Book from './Book';

const BookList = ({ books, bookListLabel, onBookClick }) => {
  const bookComponents = books.map((book) => {
    return book.hasOwnProperty("visible") && !book.visible ? null : <Book book={book} onBookClick={onBookClick} />;
  });

  return (
    <section className="books-container">
      <h2>{bookListLabel}</h2>
      <div className="books-grid">{bookComponents}</div>
    </section>
  );
};

export default BookList;
