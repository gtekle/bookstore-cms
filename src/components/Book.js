import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(removeBook({ id }));
  };

  return (
    <div className="book">
      <div className="book-detail">
        <p>category</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button">Comments</button>
        <button type="button" id={book.id} onClick={deleteBookFromStore}>Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="progress-container">
        <p>64% completed</p>
      </div>
      <div className="current-chapter">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 15</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.bool.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
