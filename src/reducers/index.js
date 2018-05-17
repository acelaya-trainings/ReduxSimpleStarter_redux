import { combineReducers } from 'redux';
import Booksreducer from './books-reducer';

const rootReducer = combineReducers({
  books: Booksreducer,
});

export default rootReducer;
