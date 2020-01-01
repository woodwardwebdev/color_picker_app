import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";

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

export default SortableElement(withStyles(styles)(DraggableColorBox));
