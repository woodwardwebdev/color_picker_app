import React, { Component, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { ChromePicker } from "react-color";
import DraggableColorBox from "./DraggableColorBox";
import DraggableColorList from "./DraggableColorList";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { arrayExpression } from "@babel/types";
import { arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";

import PaletteFormNav from "./PaletteFormNav";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  link: {
    textDecoration: "none"
  }
}));

export default function NewPaletteForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [pickerColor, setColor] = React.useState("orange");
  const [colorsArray, setColorsArray] = React.useState(
    props.palettes[0].colors
  );
  const [newName, setNewName] = React.useState("");
  const [newPaletteName, setNewPaletteName] = React.useState("");

  const paletteIsFull = colorsArray.length >= props.maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = (color, event) => {
    setColor(color.hex);
  };

  const handlePaletteNameChange = evt => {
    setNewPaletteName(evt.target.value);
  };

  const handleColorNameChange = evt => {
    setNewName(evt.target.value);
  };

  const addNewColor = () => {
    const colorToAdd = {
      color: pickerColor,
      name: newName
    };
    setColorsArray([...colorsArray, colorToAdd]);
  };

  const savePalette = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colorsArray
    };
    props.savePalette(newPalette);
    props.history.push("/");
  };

  const removeColor = colorName => {
    return setColorsArray(
      colorsArray.filter(color => color.name !== colorName)
    );
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColorsArray(arrayMove(colorsArray, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColorsArray([]);
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map(p => p.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColorsArray([...colorsArray, randomColor]);
    console.log(props.maxColors);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colorsArray.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return colorsArray.every(({ color }) => color !== pickerColor);
    });
  });

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        classes={classes}
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
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker color={pickerColor} onChange={handleColorChange} />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newName}
            onChange={handleColorNameChange}
            label=""
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "A name must be provided",
              "That name is taken",
              "That color is already in the palette"
            ]}
          ></TextValidator>
          <Button
            variant="contained"
            color="secondary"
            style={{ backgroundColor: paletteIsFull ? "grey" : pickerColor }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
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
  maxColors: 20
};

// class NewPaletteForm extends Component {
//   constructor(props, ...rest) {
//     super(props, ...rest);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <h1>New Palette Component</h1>
//       </div>
//     );
//   }
// }
// export default withStyles(styles, { withTheme: true })(NewPaletteForm);
