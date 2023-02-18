import './Book.css';

const Book = ({ book, onBookClick }) => {

  const onBookImageClick = () => {
    onBookClick(book);
  };

  return (
    <section>
      <ul className="book-display">
        <li>
          <a onClick={onBookImageClick}>
            <img src={book.thumbnail} alt="Book cover"></img>
          </a>
        </li>
        <li className="title-display">{book.title}</li>
        <li className="author-display">by {book.author}</li>
      </ul>
    </section>
  );
};

export default Book;
