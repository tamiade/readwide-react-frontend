import './Book.css';

const Book = ({ book, onBookClick }) => {

  const onBookImageClick = () => {
    onBookClick(book);
  };

  return (
    <section>
      <ul className="book-display">
        <li><a onClick={onBookImageClick}><img src={book.thumbnail} alt="Book cover"></img></a></li>
        <li>{book.title}</li>
      </ul>
    </section>
  );
};

export default Book;
