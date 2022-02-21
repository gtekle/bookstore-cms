const AddBookForm = () => (
  <form action="" className="form-add-book">
    <input type="text" name="bookTitle" id="book-title" placeholder="title" required />
    <select name="category" id="category">
      <option value="" disabled selected>Category</option>
    </select>
    <input type="submit" value="Add Book" />
  </form>
);

export default AddBookForm;
