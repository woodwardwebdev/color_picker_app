import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  navBtns: {
    marginRight: "0.5rem",
    display: "flex",
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("xs")]: {
      marginRight: "0"
    }
  },
  button: {
    display: "inline",
    height: "100%",
    margin: "0 0.5rem",
    textDecoration: "none",
    [sizes.down("sm")]: {
      margin: "0rem",
      padding: "0.3rem"
    }
  },
  navTitle: {
    [sizes.down("xs")]: {
      width: "50%"
    }
  }
});

export default styles;
