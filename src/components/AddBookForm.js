import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const { title, author } = e.target.elements;

    const newBook = {
      id: uuidv4(),
      title: title.value,
      author: author.value,
    };
    e.target.reset();
    title.focus = true;

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore} className="form-add-book">
      <input type="text" name="title" id="book-title" placeholder="title" required />
      <input type="text" name="author" id="book-author" placeholder="author" required />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBookForm;
