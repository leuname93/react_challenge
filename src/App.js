import React, { Component } from "react";
import Board from "./containers/Board/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="giphy-board-container">
        <Board />
      </div>
    );
  }
}

export default App;
