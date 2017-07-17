import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mov: 0,
      pos: 0,
      pos1: 0,
      mov1: 0,
      first: true
    };
  }

  moveroad() {
    if (this.state.pos === 1200) {
      this.state.pos -= 800;
    }

    console.log(this.state.pos);
    this.setState({
      pos: this.state.pos + 10,
      pos1: this.state.pos1 + 10
    });
  }
  render() {
    var loop = false;

    var mov = {
      transform: `translateY(${this.state.pos}px) rotateX(45deg)`
    };
    //  while(false) {
    //    var  mov={
    //     transform: `translateY(${this.state.pos}px) rotateX(30deg)`
    //   }

    //  setTimeout(() => {
    //    loop = false;
    //  }, 10000);
    //  }

    if (this.state.first) {
      setInterval(this.moveroad.bind(this), 30);

      this.setState({
        first: false
      });
    }

    return (
      <div className="App">
        <input type="button" value="start" id="start" />
        <div id="animate-area" />
        <div className="background">
          <div className="sideleft">
            <div className="left" />
            <div className="right" />
          </div>

          <div className="road" />
          <div className="animation">
            <div className="ch1" />
            <div className="ch2" />
            <div className="ch3" />
            <div className="ch4" />
            <div className="ch5" />
          </div>

          <div className="sideright" />
        </div>
      </div>
    );
  }
}

export default App;
