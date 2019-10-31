import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";

import "./App.css";

class App extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {};
  }

  render() {
    console.log(generatePalette(seedColors[2]));
    return (
      <div className="App">
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
