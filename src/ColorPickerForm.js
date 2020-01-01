import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
  picker: {
    marginTop: "2rem"
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInput: {
    width: "100%",
    height: "70px"
  }
};

class ColorPickerForm extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { currentColor: "teal", newColorName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleColorChange(color, event) {
    this.setState({ currentColor: color.hex });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return this.props.colorsArray.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return this.props.colorsArray.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { newColorName, currentColor } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChange={this.handleColorChange}
          className={classes.picker}
          width="100%"
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            variant="filled"
            margin="normal"
            className={classes.colorNameInput}
            value={newColorName}
            onChange={this.handleChange}
            name="newColorName"
            placeholder="New Color Name"
            label=""
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "A name must be provided",
              "That name is taken",
              "That color is already in the palette"
            ]}
          ></TextValidator>
          <Button
            className={classes.addColor}
            variant="contained"
            color="secondary"
            style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
