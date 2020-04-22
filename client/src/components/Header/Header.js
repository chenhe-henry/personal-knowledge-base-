import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <div className="section__header">
        <div className="section__header-title">
          <p>Personal Knowledge Base</p>
        </div>
        <Link to="/" className="section__header-link">
          <div className="title">Chen He</div>
        </Link>
        <hr />
      </div>
    );
  }
}

export default Header;
