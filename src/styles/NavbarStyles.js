import sizes from "./sizes";

export default {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    backgroundColor: "white"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontWeight: "300",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  },
  slider: {
    width: "340px",
    margin: "0 20px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [sizes.down("md")]: { width: "150px" }
  }
};
