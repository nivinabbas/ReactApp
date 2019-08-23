import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Validation from "./Component/Validation";
import Char from "./Component/Char";
class App extends Component {
  state = {
    userInputName: ""
  };

  changeInputName = event => {
    this.setState({ userInputName: event.target.value });
  };
  deleteInputName = index => {
    const text = this.state.userInputName.split("");
    text.splice(index, 1);
    const updateText = text.join("");
    this.setState({ userInputName: updateText });
  };

  render() {
    const listName = this.state.userInputName.split("").map((chars, index) => {
      return (
        <Char
          character={chars}
          key={index}
          clicked={() => this.deleteInputName(index)}
        />
      );
    });
    return (
      <div>
        <input
          type="Text"
          onChange={this.changeInputName}
          value={this.state.userInputName}
        />
        <p>{this.state.userInputName}</p>
        <Validation inputLength={this.state.userInputName.length} />
        {listName}
      </div>
    );
  }
}

export default App;
