import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div >
        <Search />
      </div>
    );
  }
}

export default App;
