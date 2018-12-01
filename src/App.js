import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  state = {
    counter: 0,
  }
  render() {
    return (
      <div className="App">
      {this.state.counter}
        <button onClick = {this.increment}> Increment </button>
        <button onClick = {this.decrement}> Decrement </button>
        Hello World
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }
}

export default App;
