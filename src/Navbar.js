import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {};
  }

  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
        </div>
        <div classname="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
