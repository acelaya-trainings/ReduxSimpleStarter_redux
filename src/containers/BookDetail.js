import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if (! this.props.book) {
      return <div>Select a book</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div><b>Title:</b> {this.props.book.title}</div>
        <div><b>Pages:</b> {this.props.book.pages}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.activeBook
});

export default connect(mapStateToProps)(BookDetail);
