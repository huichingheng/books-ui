import React, { Component } from "react";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class Book extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  async getBook() {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      books: data
    });
  }

  async componentDidMount() {
    await this.getBook();
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })};
      </div>
    );
  }
}

export default Book;
