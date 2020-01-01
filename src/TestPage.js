import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

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
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="root">
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
        <Tabs
          orientation="horizontal"
          variant="scrollable"
          value={value}
          onChange={this.handleChange}
          classname="tabs"
          name="value"
        >
          <Tab label="Item One" id="vertical-tab-1"></Tab>
          <NavLink to="/">
            <Tab label="Item Two" id="vertical-tab-2"></Tab>
          </NavLink>

          <Tab label="Item Three" id="vertical-tab-3"></Tab>
          <Tab label="Item Four" id="vertical-tab-4"></Tab>
          <Tab label="Item Five" id="vertical-tab-5"></Tab>
        </Tabs>
      </div>
    );
  }
}
export default withStyles(styles)(TestPage);
