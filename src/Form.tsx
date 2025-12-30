import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      color: "red",
    };
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleColorChange = (e) => {
    this.setState({
      color: e.target.value,
    });
  };
  handleSubmit = (e) => {
    alert(
      `${this.state.username} and ${this.state.comments} and ${this.state.color}`
    );
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <label>Color</label>
          <select value={this.state.color} onChange={this.handleColorChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
