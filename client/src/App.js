import React, { Component } from "react";
import "./App.css";
import Save from "./components/Save"
import Search from "./components/Search"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import socketIOClient from "socket.io-client";

// const express = require("express");
// const app = express();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);


// const socket = io.connect('http://localhost');
// socket.on('news', function (data) {
//   console.log(data);
//   socket.emit('my other event', { my: 'data' });
// });


class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     response: false,
  //     endpoint: "http://localhost:3001"
  //   };
  // }
  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   const socket = socketIOClient(endpoint);
  //   socket.on("FromAPI", data => this.setState({ response: data }));
  // }

  render() {
    // const { response } = this.state;
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Search} />
          <Route exact path="/save" component={Save} />

          {/* <div style={{ textAlign: "center" }}>
            {response
              ? <p>
                The temperature in Florence is: {response} °F
              </p>
              : <p>Loading...</p>}
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
