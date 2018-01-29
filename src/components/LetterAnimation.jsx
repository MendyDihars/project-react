import React from "react";

class LetterAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sentence: "" };
  }

  write(event) {
    const sentence = "Bonjour je suis ton ami désormais. Ajoute moi !";
  }

  render() {
    return (
      <div>
        <div>{this.state.sentence}</div>
        <button onClick={() => this.write()}>Write !</button>
      </div>
    )
  }

};

export default LetterAnimation;
