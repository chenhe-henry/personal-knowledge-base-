import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HtmlBase from "./components/HtmlBase/HtmlBase";
import CssBase from "./components/CssBase/CssBase";
import JavascriptBase from "./components/JavascriptBase/JavascriptBase";
import ReactBase from "./components/ReactBase/ReactBase";
import HerokuBase from "./components/HerokuBase/HerokuBase";

function App() {
  return (
    <div className="App" id="home">
      <BrowserRouter>
        <Header />
        <Route exact path="/htmlbase" component={HtmlBase}></Route>
        <Route exact path="/cssbase" component={CssBase}></Route>
        <Route exact path="/javascriptbase" component={JavascriptBase}></Route>
        <Route exact path="/reactbase" component={ReactBase}></Route>
        <Route exact path="/herokubase" component={HerokuBase}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
