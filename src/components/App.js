import React, { Component } from 'react';
import BookDetail from '../containers/BookDetail';
import BookList from '../containers/BookList';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
