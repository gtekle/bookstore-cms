import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { deleteBook } from '../redux/books/books';

const Book = ({ book }) => {
  const progressValue = 64;
  const dispatch = useDispatch();

  const deleteBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(deleteBook(id));
  };

  return (
    <div className="book">
      <div className="book-detail">
        <p className="book-category">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author || 'John Doe'}</p>
        <button className="btn-comments" type="button">Comments</button>
        <button className="btn-remove" type="button" id={book.id} onClick={deleteBookFromStore}>Remove</button>
        <button className="btn-edit" type="button">Edit</button>
      </div>
      <div className="progress-container">
        <div style={{ width: 50, height: 50 }} className="circle-wrap">
          <CircularProgressbar value={progressValue} />
        </div>
        <div className="progress-text">
          <p className="progress-percentage">
            {progressValue}
            %
          </p>
          <p className="progress-completed">completed</p>
        </div>
      </div>
      <hr className="vertical-separator" />
      <div className="current-chapter-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="current-lesson">Lesson</p>
        <button className="btn-update-progress" type="button">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
