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
        <div className="category">
          <Link to="/htmlbase" className="section__header-link">
            <div className="category__link">HTML</div>
          </Link>
          <Link to="/cssbase" className="section__header-link">
            <div className="category__link">CSS</div>
          </Link>
          <Link to="/javascriptbase" className="section__header-link">
            <div className="category__link">Javascript</div>
          </Link>
          <Link to="/reactbase" className="section__header-link">
            <div className="category__link">React</div>
          </Link>
          <Link to="/herokubase" className="section__header-link">
            <div className="category__link">Heroku</div>
          </Link>
          <Link to="/todo" className="section__header-link">
            <div className="category__link">Todo</div>
          </Link>
          <Link to="/codingchallenge" className="section__header-link">
            <div className="category__link">Coding Challenges</div>
          </Link>
        </div>
        <hr />
        <div>Landing Page</div>
      </div>
    );
  }
}

export default Header;
