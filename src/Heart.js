import { Component } from "react/cjs/react.production.min";
import heartOne from "./heart1-211215-195145.jpeg";
import heartTwo from "./heart2-211215-195145.jpeg";

export class Heart extends Component {
  state = {
    CTA: "Like Us!",
    image: heartOne,
  };

  heartClicked = () => {
    this.setState({
      CTA: "Thank you! We love you too!",
      image: heartTwo,
    });
  };

  handleChange = (e) => {
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>{this.state.CTA}</h1>
        </div>
        <div className="container">
          <img
            onClick={this.heartClicked}
            src={this.state.image}
            width="120px"
            alt="heart"
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
