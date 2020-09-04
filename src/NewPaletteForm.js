import React from "react";
// import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// import DraggableColorBox from "./DraggableColorBox";
import DraggableColorList from "./DraggableColorList";

import { arrayMove } from "react-sortable-hoc";
// import { Link } from "react-router-dom";

import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

import styles from "./styles/NewPaletteFormStyles";
import seedColors from "./seedColors";

export default function NewPaletteForm(props) {
  const classes = styles();
  const [open, setOpen] = React.useState(true);
  const [pickerColor, setColor] = React.useState("orange");
  const [colorsArray, setColorsArray] = React.useState(seedColors[0].colors);
  // const [newName, setNewName] = React.useState("");
  // const [newPaletteName, setNewPaletteName] = React.useState("");

  const paletteIsFull = colorsArray.length >= props.maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColorsArray([...colorsArray, newColor]);
  };

  const savePalette = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colorsArray;
    props.savePalette(newPalette);
    props.history.push("/");
  };

  const removeColor = (colorName) => {
    return setColorsArray(
      colorsArray.filter((color) => color.name !== colorName)
    );
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColorsArray(arrayMove(colorsArray, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColorsArray([]);
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colorsArray.some(
        (color) => color.name === randomColor.name
      );
    }
    setColorsArray([...colorsArray, randomColor]);
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={props.palettes}
        savePalette={savePalette}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          {/* <Typography variant="h4"></Typography> */}
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.btn}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            newColor={pickerColor}
            addNewColor={addNewColor}
            colorsArray={colorsArray}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <DraggableColorList
          colors={colorsArray}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

NewPaletteForm.defaultProps = {
  maxColors: 20,
};
