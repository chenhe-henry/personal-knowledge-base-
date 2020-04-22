import React, { Fragment } from "react";
import "./Todo.scss";
class Todo extends React.Component {
  state = {};
  render() {
    const listing = (
      <div>
        <div>Hello</div>
        <ul>
          <li></li>
        </ul>
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
          <div>This is Todo list</div>
          <input value="Add task"></input>
          <button>Add</button>
          {listing}
        </div>
      </Fragment>
    );
  }
}

export default Todo;
