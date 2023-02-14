import Book from './Book';

const BookList = ({ books, onBookClick }) => {
  const bookComponents = books.map((book) => {
    return <Book book={book} onBookClick={onBookClick} />;
  });

  return (
    <section className="books-container">
      <h2>Featured Books</h2>
      <div className="books-grid">{bookComponents}</div>
    </section>
  );
};

export default BookList;
