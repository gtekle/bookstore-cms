import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = '0flE2xB6mnDoM2xrR5CG';
const FETCH_SUCCESS = 'bookStore/books/FETCH_SUCCESS';
const FETCH_FAIL = 'bookStore/books/FETCH_FAIL';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.request({
      baseURL: BASE_URL,
      url: `/apps/${APP_ID}/books`,
    });

    const responseArray = [];

    for (let i = 1; i < Object.keys(response.data).length; i += 1) {
      const id = Object.keys(response.data)[i];
      const { title, category } = response.data[id][0];
      responseArray.push({ id, title, category });
    }

    dispatch({
      type: FETCH_SUCCESS,
      payload: responseArray,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAIL,
      payload: error,
    });
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const postBook = ({ id, title, category }) => async (dispatch) => {
  const newBook = {
    item_id: id,
    title,
    category,
  };

  const response = await axios.request({
    baseURL: BASE_URL,
    url: `/apps/${APP_ID}/books`,
    method: 'POST',
    data: newBook,
  });

  if (response.status === 201) dispatch(addBook({ id, title, category }));
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const deleteBook = (id) => async (dispatch) => {
  const response = await axios.request({
    baseURL: BASE_URL,
    url: `/apps/${APP_ID}/books/${id}`,
    method: 'DELETE',
  });

  if (response.status === 201) dispatch(removeBook({ id }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_SUCCESS:
      return [...action.payload];
    case FETCH_FAIL:
      return [];
    default:
      return state;
  }
};

export default reducer;
