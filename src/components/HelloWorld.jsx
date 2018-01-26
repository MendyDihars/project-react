import React from "react";

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    this.state = { active: true };
  }

  myColor() {
    return (this.state.active) ? "blue" : "red";
  }

  render() {
    return (
      <h1 style={{color: this.myColor()}} onClick={(e) => this.changeState(e)}>Hello World !</h1>
    )
  };

  changeState(event) {
    this.setState({ active: false });
  }
};

export default HelloWorld;
