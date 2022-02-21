import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBookFromStore = (e) => {
    const id = e.target.id;
    console.log(id);
    dispatch(removeBook({ id, }));
  }

  return (
    <div className="book">
      <div className="book-detail">
        <p>category</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type='button'>Comments</button>
        <button type="button" id={book.id} onClick={deleteBookFromStore}>Remove</button>
        <button type='button'>Edit</button>
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
  )
};

export default Book;
