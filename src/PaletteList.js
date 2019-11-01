import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {};
  }

  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(p => (
          <Link to={`/palette/${p.id}`}>
            <h1>{p.paletteName}</h1>
          </Link>
        ))}
      </div>
    );
  }
}
export default PaletteList;
