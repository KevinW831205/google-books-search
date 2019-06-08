import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Save from "./components/Save";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/save" component={Save}/> 
      </div>
    </Router>
  );

}

export default App;
