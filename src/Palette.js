import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    const colorboxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar here */}
        <div className="Palette-colors">{colorboxes}</div>
        {/* Footer Here */}
      </div>
    );
  }
}

export default Palette;
