import React, { Component } from "react";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class Author extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
  }

  async getAuthor() {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      authors: data
    });
  }

  async componentDidMount() {
    await this.getAuthor();
  }
  render() {
    return (
      <div>
        <h2>Authors</h2>
        {this.state.authors.map(author => {
          return <li key={author._id}>{author.name}</li>;
        })}
      </div>
    );
  }
}

export default Author;
