import React, { Component } from "react";
import "./App.css";
import Book from "./components/Book";
import Author from "./components/Author";

class App extends Component {
  render() {
    return (
      <div>
        <Book />
        <Author />
      </div>
    );
  }
}

export default App;
