import React, { Component } from "react";

class TextEffect extends Component {
  constructor(props) {
    super(props);
    let initialPhrase = "";
    let newPhrase = "Hi. I'm Ryan.";
    let howManyLetters = newPhrase.length;
    this.state = {
      initialPhrase: initialPhrase,
      newPhrase: newPhrase,
      howManyLetters: howManyLetters,
      counter: 0
    };
    this.renderPhrase = this.renderPhrase.bind(this);
  }

  componentDidMount() {
    this.renderPhrase();
  }

  renderPhrase() {
    let phraseArray = this.state.newPhrase.split("");
    let i = this.state.counter;
    let plusOne = i + 1;
    let newPhrase = this.state.initialPhrase + phraseArray[i];
    this.setState({ initialPhrase: newPhrase, counter: plusOne });
    if (plusOne < this.state.howManyLetters) {
      setTimeout(this.renderPhrase, 90);
    }
  }
  render() {
    return (
      <h1>
        <i className="fa fa-code" /> {this.state.initialPhrase}
      </h1>
    );
  }
}

export default TextEffect;
