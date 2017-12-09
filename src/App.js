import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

export default class App extends Component {
  state = {
    text: '',
    textLength: 0,
  }
  
  onChangeHandler = (event) => {
    const textLength = event.target.value.split('').length
    this.setState({
      text: event.target.value,
      textLength: textLength
    })
  }
 
  deleteChar = (charIndex) => {
    const text = [...this.state.text]
    const textLength = [...this.state.textLength]

    this.state.text.splice(charIndex, 1)
    // this.setState({
    //   text: text,
    //   // textLength: text.length,
    // })
    // debugger;
  }

  render() {
    return (
    <div>
      <input 
        type="text"
        onChange={(event)=>this.onChangeHandler(event)}
      />
      <p>Text length: {this.state.textLength}</p>
      <ValidationComponent
        textLength={this.state.textLength}
        change={this.onChangeHandler}
      />
      <CharComponent 
        text={this.state.text}
        remove={this.deleteChar}
      />
    </div>
  )}
};