import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
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
      <li key={book.title} className="list-group-item">{book.title}</li>
    ))
  }
}

const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps)(BookList);
