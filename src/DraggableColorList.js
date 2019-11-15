import React, { Component } from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    height: "100%",
    marginTop: "4em"
  }
};

class DraggableColorList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            color={color.color}
            name={color.name}
            handleDelete={this.props.removeColor}
            key={color.name}
          />
        ))}
      </div>
    );
  }
}

export default SortableContainer(withStyles(styles)(DraggableColorList));
