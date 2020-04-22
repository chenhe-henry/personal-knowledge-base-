import React, { Fragment } from "react";
import { Link } from "react-router-dom";
class Project extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="navigation">
          <h1 className="nav">
            <a href="/" className="nav-link">
              Home
            </a>
          </h1>
          <h1 className="nav">
            <a href="/projects" className="nav-link">
              Projects
            </a>
          </h1>
        </div>
        <div className="category">
          <Link to="/htmlbase" className="section__landing-link">
            <div className="category__link">HTML</div>
          </Link>
          <Link to="/cssbase" className="section__landing-link">
            <div className="category__link">CSS</div>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Project;
