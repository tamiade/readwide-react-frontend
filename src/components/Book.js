const Book = ({ thumbnail, title, author, description, onBookClick }) => {

  const onBookImageClick = () => {
   
  };

  return (
    <section>
      <ul>
        <li><a onBookClick={onBookImageClick}><img src={thumbnail} alt="Book cover"></img></a></li>
        <li>{title}</li>
        <li>{author}</li>
        <li>{description}</li>
      </ul>
    </section>
  );
};

export default Book;
