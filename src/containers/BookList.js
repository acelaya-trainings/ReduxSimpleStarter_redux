import React from 'react';

export default class BookList extends React.Component {
  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList() {
    const books = this.props.books || [];

    return books.map(book => (
      <li key={book.title} className="list-book-item">{book.title}</li>
    ))
  }
}
