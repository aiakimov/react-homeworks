import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  state = { counter: 0 };

  plusOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  minusOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="wrapper-counter">
        <button onClick={() => this.minusOne()}>-</button>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.plusOne()}>+</button>
      </div>
    );
  }
}

export default Counter;
