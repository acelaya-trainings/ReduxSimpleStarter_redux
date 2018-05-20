import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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
      <li key={book.title} className={this.generateBookClass(book)} onClick={() => this.props.selectBook(book)}>
        {book.title}
      </li>
    ))
  }

  generateBookClass(book) {
    const activeBookName = this.props.activeBook ? this.props.activeBook.title : '';
    return 'list-group-item ' + (activeBookName === book.title ? 'active' : '');
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  activeBook: state.activeBook
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectBook }, dispatch);

// Promote a books list from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
