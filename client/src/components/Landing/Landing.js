import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
class Landing extends React.Component {
  state = {};
  render() {
    return (
      <div className="category">
        <Link to="/htmlbase" className="section__landing-link">
          <div className="category__link">HTML</div>
        </Link>
        <Link to="/cssbase" className="section__landing-link">
          <div className="category__link">CSS</div>
        </Link>
        <Link to="/javascriptbase" className="section__landing-link">
          <div className="category__link">Javascript</div>
        </Link>
        <Link to="/reactbase" className="section__landing-link">
          <div className="category__link">React</div>
        </Link>
        <Link to="/herokubase" className="section__landing-link">
          <div className="category__link">Heroku</div>
        </Link>
        <Link to="/todo" className="section__landing-link">
          <div className="category__link">Todo</div>
        </Link>
        <Link to="/codingchallenge" className="section__landing-link">
          <div className="category__link">Coding Challenges</div>
        </Link>
        <Link to="/projects" className="section__landing-link">
          <div className="category__link">Projects</div>
        </Link>
      </div>
    );
  }
}

export default Landing;
