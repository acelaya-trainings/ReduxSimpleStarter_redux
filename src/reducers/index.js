import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';
import ActiveBookReducer from './active-book-reducer';

export default combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer,
});
