import React, { Component } from "react";
import "./App.css";
import Books from "./components/Books";
import Authors from "./components/Authors";

class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Authors />
      </div>
    );
  }
}

export default App;
