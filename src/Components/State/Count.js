import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <div>Counter</div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
