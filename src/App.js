import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

export default class App extends Component {
  state = {
    userInput: ''
  }
  
  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }
 
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      userInput: updatedText
    })
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}
        />;
    })

    return (
    <div>
      <input 
        type="text"
        value={this.state.userInput}
        onChange={this.inputChangedHandler}
      />
      <p>userInput: {this.state.userInput}</p>
      <Validation
        inputLength={this.state.userInput.length}
        change={this.onChangeHandler}
      />
      {charList}
    </div>
  )}
};
