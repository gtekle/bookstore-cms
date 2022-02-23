import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { postBook } from '../redux/books/books';
import genres from '../util/bookCategories';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const { title, category } = e.target.elements;

    const newBook = {
      id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    e.target.reset();
    title.focus = true;

    dispatch(postBook(newBook));
  };

  return (
    <div className="add-book-container">
      <hr className="add-book-separator" />
      <h2 className="add-book-section-title">Add New Book</h2>
      <form onSubmit={submitBookToStore} className="form-add-book">
        <input type="text" name="title" id="book-title" placeholder="Book Title" required />
        <select name="category" id="category">
          <option className="select-placeholder" hidden>Category</option>
          {
            genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)
          }
        </select>
        <input type="submit" className="btn-submit" value="Add Book" />
      </form>
    </div>
  );
};

export default AddBookForm;
