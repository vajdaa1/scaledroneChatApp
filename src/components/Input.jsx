import { Component } from "react";
import React from "react";
import "./input.css";

class Input extends Component {
  state = {
    text: "",
  };

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Upišite svoju poruku ovdje"
            autofocus="true"
          />
          <button>Pošalji</button>
        </form>
      </div>
    );
  }
}

export default Input;
