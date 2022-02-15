import { Component } from "react";

export class Names extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jack",
    };
  }
  changeName() {
    this.setState({ name: (this.state.name = "Leopold") });
  }

  render() {
    return (
      <div>
        <h1> Hello {this.state.name}</h1>
        <button onClick={() => this.changeName()}>Change</button>
      </div>
    );
  }
}
