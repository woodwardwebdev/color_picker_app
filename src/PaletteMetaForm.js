import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { stage: "form", newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.createPalette = this.createPalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("paletteNameUnique", (value) => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  showEmojiPicker = () => {
    this.setState({ stage: "emoji" });
  };

  handleSubmit = () => {
    this.props.savePalette(this.state.newPaletteName);
  };

  createPalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.savePalette(newPalette);
    this.setState({ stage: "" });
  }

  render() {
    const { hideForm } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div>
        <Dialog open={this.state.stage === "emoji"} onClose={hideForm}>
          <DialogTitle>Emoji Time!</DialogTitle>
          <Picker
            onSelect={this.createPalette}
            title="Pick a Palette Emoji"
            emoji=""
            showSkinTones="false"
          />
        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Enter a name for your new palette. Make sure it's unique!
              </DialogContentText>

              <TextValidator
                autoComplete="off"
                value={newPaletteName}
                name="newPaletteName"
                label="New Palette Name"
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                validators={["required", "paletteNameUnique"]}
                errorMessages={["Please Enter A Name!", "Name Already Used"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
