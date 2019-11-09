import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
    height: "10vh",
    width: "100%",
    backgroundColor: "steelblue",
    justifyContent: "center"
    // alignItems: "center"
  },
  menuButton: {
    marginRight: "1rem",
    color: "white"
  },
  title: {
    flexGrow: "1"
  },
  appBarLink: {
    display: "inline-block",
    width: "125px",
    color: "white",
    textDecoration: "none"
  },
  avatar: { fontSize: "1rem", width: "35px", height: "35px" }
};

class TestPage extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="AppBar">
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              <NavLink to="/" exact className={classes.appBarLink}>
                HOME
              </NavLink>
            </Typography>
            <Avatar
              className={classes.avatar}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              CW
            </Avatar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(TestPage);
