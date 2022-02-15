import { Component } from "react";

export class Names extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jack",
      age: 30,
    };
  }
  changeName() {
    this.setState({ name: "Maria", age: 40 });
  }

  render() {
    return (
      <div>
        <h1> Hello {this.state.name}</h1>
        <h3>You are {this.state.age} years old</h3>
        <button onClick={() => this.changeName()}>Change</button>
      </div>
    );
  }
}
