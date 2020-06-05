import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import HtmlBase from "./components/HtmlBase/HtmlBase";
import CssBase from "./components/CssBase/CssBase";
import JavascriptBase from "./components/JavascriptBase/JavascriptBase";
import ReactBase from "./components/ReactBase/ReactBase";
import HerokuBase from "./components/HerokuBase/HerokuBase";
import Todo from "./components/Todo/Todo";
import CodingChallenge from "./components/CodingChallenge/CodingChallenge";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App" id="home">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/htmlbase" component={HtmlBase}></Route>
        <Route exact path="/cssbase" component={CssBase}></Route>
        <Route exact path="/javascriptbase" component={JavascriptBase}></Route>
        <Route exact path="/reactbase" component={ReactBase}></Route>
        <Route exact path="/herokubase" component={HerokuBase}></Route>
        <Route exact path="/todo" component={Todo}></Route>
        <Route
          exact
          path="/codingchallenge"
          component={CodingChallenge}
        ></Route>
        <Route exact path="/projects" component={Project}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
