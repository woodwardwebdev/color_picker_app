import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

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
    boxSizing: "border-box",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)"
    }
  },
  boxContent: {
    color: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: { transition: "all 0.2s ease-in-out" }
};

class DraggableColorBox extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {};
  }

  render() {
    const { classes, color, name, handleDelete } = this.props;
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <span>
            <DeleteForeverOutlinedIcon
              className={classes.deleteIcon}
              onClick={() => {
                handleDelete(name);
              }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DraggableColorBox);
