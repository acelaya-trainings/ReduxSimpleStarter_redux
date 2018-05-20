import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';

export default combineReducers({
  books: BooksReducer,
});
