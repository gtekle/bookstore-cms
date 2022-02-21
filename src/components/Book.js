const Book = () => (
  <div className="book">
    <div className="book-detail">
      <p>category</p>
      <h3>Book Title</h3>
      <p>author</p>
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

export default Book;
