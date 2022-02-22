import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from '../redux/books/books';
import Book from './Book';

const BooksLit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="book-list">
      <h2>BooksList</h2>
      {
        books.map((book) => <Book key={book.id} book={book} />)
      }
    </div>
  );
};

export default BooksLit;
