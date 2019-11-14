import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

// export default function DraggableColorBox() {
//   return (
//     <div style={{ backgroundColor: this.props.color }}>{this.props.color}</div>
//   );
// }

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3px",
    boxSizing: "border-box"
  }
};

class DraggableColorBox extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {};
  }

  render() {
    const { classes, color, name } = this.props;
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        {name}
      </div>
    );
  }
}

export default withStyles(styles)(DraggableColorBox);
