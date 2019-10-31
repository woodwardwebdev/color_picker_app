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
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
