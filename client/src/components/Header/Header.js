import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/">Chen He</Link>
        <div className="category">
          <Link to="/htmlbase">
            <div className="category__link">HTML</div>
          </Link>
          <Link to="/cssbase">
            <div className="category__link">CSS</div>
          </Link>
          <Link to="/javascriptbase">
            <div className="category__link">Javascript</div>
          </Link>
          <Link to="reactbase">
            <div className="category__link">React</div>
          </Link>
          <Link to="herokubase">
            <div className="category__link">Heroku</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
