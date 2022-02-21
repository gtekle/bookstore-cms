import { useSelector } from 'react-redux';
import Book from './Book';

const BooksLit = () => {
  const books = useSelector(state => state.booksReducer)
  console.log(books);

  return (
    <div className="book-list">
      <h2>BooksList</h2>
      {
        books.map(book => <Book key={book.id} book={book} />)
      }
    </div>
  )
};

export default BooksLit;
