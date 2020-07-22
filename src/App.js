import React from "react";
import "./App.css";

import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends React.Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({
      userInput: updatedText,
    });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <h1>It's Working!</h1>

        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>userInput:{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
