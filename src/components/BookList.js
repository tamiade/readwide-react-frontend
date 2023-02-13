import Book from './Book';

const BookList = ({ books }) => {

  const bookComponents = books.map((book) => {
    return (
        <Book 
        thumbnail={book.thumbnail}
        title={book.title}
        author={book.author}
        description={book.description}
        />
    );
  });

  return (
    <section className="books-container">
      <h2>Featured Books</h2>
      <div className="books-grid">
        {bookComponents}
      </div>
    </section>
  );
}

export default BookList;
