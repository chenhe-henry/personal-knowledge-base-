import React, { Fragment } from "react";
import "./Todo.scss";
class Todo extends React.Component {
  state = { userInput: "" };
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    const listing = (
      <div>
        <div>{this.state.userInput}</div>
        <ol>
          <li>{this.state.userInput}</li>
        </ol>
      </div>
    );
    return (
      <Fragment>
        <div>
          <div className="navigation">
            <h1 className="nav">
              <a href="/" className="nav-link">
                Home
              </a>
            </h1>
            <h1 className="nav">
              <a href="/todo" className="nav-link">
                Todo
              </a>
            </h1>
          </div>
          <input
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          ></input>
          <button>Add To Do</button>
          {listing}
        </div>
      </Fragment>
    );
  }
}

export default Todo;
